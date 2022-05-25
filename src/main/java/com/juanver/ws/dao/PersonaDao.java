package com.juanver.ws.dao;


import java.util.List;

import org.springframework.stereotype.Service;

import com.juanver.ws.utilidades.PersonasUtilidades;
import com.juanver.ws.vo.PersonaVo;

@Service
public class PersonaDao {
	
	public PersonaDao() {
		PersonasUtilidades.iniciarLista();
	}

	public PersonaVo consultarPersonaIndividual(String documento) {
		PersonaVo persona = null;
		for (PersonaVo p : PersonasUtilidades.listaPersonas) {
			if (p.getDocumento().equals(documento)) {
				persona = new PersonaVo();
				persona.setDocumento(p.getDocumento());
				persona.setNombre(p.getNombre());
				persona.setTelefono(p.getTelefono());
				persona.setEdad(p.getEdad());
				persona.setProfesion(p.getProfesion());
				persona.setPassword(p.getPassword());
				persona.setTipo(p.getTipo());
			}
		}
		return persona;
	}

	public List<PersonaVo> obtenerListaPersonas() {
		return PersonasUtilidades.listaPersonas;
	}
	
	public PersonaVo registrarPersona(PersonaVo persona) {
		boolean existe = false;
		
		for (PersonaVo obj : PersonasUtilidades.listaPersonas) {
			if (obj.getDocumento().equals(persona.getDocumento())) {
				existe = true;
				break;
			}
		}
			if (existe == false) {
				persona.setPassword(persona.getDocumento());
				PersonasUtilidades.listaPersonas.add(persona);
				return persona;
			}
		return null;
	}
	
	public PersonaVo crearLogin(String documento,String pass) {
		PersonaVo persona = null;
		
		for (PersonaVo p : PersonasUtilidades.listaPersonas) {
			if (p.getDocumento().equals(documento) && p.getPassword().equals(pass)) {
				persona = p;
				break;
			}
		}
		return persona;
	}
	
	public PersonaVo actualizarPersona(PersonaVo persona) {
		PersonaVo personaVo = null;
		for (PersonaVo p : PersonasUtilidades.listaPersonas) {
			if (p.getDocumento().equals(persona.getDocumento())) {
				p.setDocumento(persona.getDocumento());
				p.setNombre(persona.getNombre());
				p.setTelefono(persona.getTelefono());
				p.setEdad(persona.getEdad());
				p.setProfesion(persona.getProfesion());
				p.setPassword(persona.getPassword());
				p.setTipo(persona.getTipo());
				personaVo = p;
				break;
			}
		}
		return personaVo;
	}
	
	public void eliminarPersona(PersonaVo persona) {
		for (PersonaVo p : PersonasUtilidades.listaPersonas) {
			if (p.getDocumento().equals(persona.getDocumento())) {
				PersonasUtilidades.listaPersonas.remove(p);
				break;
			}
		}
	}

}
