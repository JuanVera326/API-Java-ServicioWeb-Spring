package com.juanver.ws.utilidades;

import java.util.ArrayList;
import java.util.List;
import com.juanver.ws.vo.PersonaVo;

public class PersonasUtilidades {
	
	public final static int tipo_admin = 1;
	public final static int tipo_empleado = 2;
	static int bandera = 0;

	public static List<PersonaVo> listaPersonas = new ArrayList<PersonaVo>();
	
	public static void iniciarLista() {
		if (bandera == 0) {
			listaPersonas.add(new PersonaVo("admin", "Administrador","NaN",0,"NaN","admin",1));
			listaPersonas.add(new PersonaVo("111","Juan Vera","789456",19,"Ingeniero","111",tipo_admin));
			listaPersonas.add(new PersonaVo("222","Martin","456123",49,"Senior","222",tipo_empleado));
			listaPersonas.add(new PersonaVo("333","Maria Andrea","456789",29,"Estudiante","333",tipo_empleado));
		}
	}
}
