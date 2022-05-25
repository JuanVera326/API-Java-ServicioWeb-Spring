package com.juanver.ws.rest;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.juanver.ws.dao.PersonaDao;
import com.juanver.ws.vo.PersonaVo;

@RestController
@RequestMapping("/servicio")
@CrossOrigin(origins = "*")
public class PersonaService {
	
	@Autowired(required = true)
	private PersonaDao personaDao;
	
	@GetMapping("hola")
	public String saludo() {
		return "Saludo!!!";
	}
	
	@GetMapping("personas/{id}")
	public ResponseEntity<PersonaVo> getPersona(@PathVariable("id") String documento){
		PersonaVo persona = personaDao.consultarPersonaIndividual(documento);
		
		if (persona != null) {
			return ResponseEntity.ok(persona);
		}else {
			
		return ResponseEntity.notFound().build();
		}
	}
	
	@GetMapping("personas-list")
	public ResponseEntity<List<PersonaVo>> getPersonas(){
		List<PersonaVo> personas = personaDao.obtenerListaPersonas();
		return ResponseEntity.ok(personas);
	}
	
	@PostMapping("guardar")
	public ResponseEntity<PersonaVo> registrarPersona(@RequestBody PersonaVo persona){
		PersonaVo miPersonaVo = personaDao.registrarPersona(persona);
		if (miPersonaVo != null) {
			return ResponseEntity.ok(miPersonaVo);
		}else {
			return ResponseEntity.notFound().build();
		}
	}
	
	@PostMapping("login")
	public ResponseEntity<PersonaVo> validarUsuario(@RequestBody PersonaVo persona){
			
		PersonaVo miPersona = personaDao.crearLogin(persona.getDocumento(), persona.getPassword());
		if (miPersona != null) {
			return ResponseEntity.ok(miPersona);
		}else {
			return ResponseEntity.notFound().build();
		}
	}
	
	@PutMapping("actualizar")
	public ResponseEntity<PersonaVo> actualizarUsuario(@RequestBody PersonaVo persona){
		
		PersonaVo miPersona = null;
		if (personaDao.consultarPersonaIndividual(persona.getDocumento()) != null) {
			miPersona = personaDao.actualizarPersona(persona);
			
			if (miPersona != null) {
				return ResponseEntity.ok(miPersona);
			}else {
				return ResponseEntity.notFound().build();
			}
		}else {
			return ResponseEntity.notFound().build();
		}
	}
	
	@DeleteMapping("eliminar/{id}")
	public ResponseEntity<PersonaVo> eliminarUsuario(@PathVariable String id){
			PersonaVo miPersonaVo = personaDao.consultarPersonaIndividual(id);
			
			if (miPersonaVo != null) {
				personaDao.eliminarPersona(miPersonaVo);
				return ResponseEntity.ok(null);
			}else {
				return ResponseEntity.notFound().build();
			}
	}

}

