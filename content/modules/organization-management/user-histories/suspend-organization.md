---
id: historia-de-usuario-{{identificador_unico}}
title: Suspender  Organización
tags: [user-history, organization-management, in-progress]
---

## 📋 Descripción General

**Como** Administrador Plataforma,  
**Deseo** suspender las operaciones de una organización ya existente,  
**Para** evitar que la organización pueda realizar más gestiones ni pueda ser asignada por incumplimiento de políticas o condiciones.

## 🎯 Criterios de Aceptación

- [ ] **Funcionalidad Configurada para:** Esta funcionalidad debe estar configurada para **Administrador Plataforma**.
- [ ] **Estado de la Organización:** Al realizar la suspensión, el estado de la organización debe cambiar a **Suspendida**.
- [ ] **Condiciones para Suspensión:** La organización no debe tener actividad pendiente; es decir, no debe tener una subasta en curso y/o un bien por entregar.
- [ ] **Suspensión de Cuentas:** Al suspender la organización, todas las cuentas de usuarios pertenecientes a dicha organización quedarán suspendidas; es decir, no podrán acceder a la plataforma. Estas cuentas deben pasar a estado **Suspendido**. (Ref: [PSD-29](https://novaly-team.atlassian.net/browse/PSD-29))
- [ ] **Notificación por Correo Electrónico:** Debe enviarse un correo electrónico al administrador de la organización indicando la suspensión. (Ref: [PSD-75](https://novaly-team.atlassian.net/browse/PSD-75))

## 🔗 Relación con Otros Elementos

- **Épica/Módulo Relacionado:** [JIRA-200](https://novaly-team.atlassian.net/browse/JIRA-200)
- **Endpoints Relacionados:**
  - `POST /v1/organization-management/suspend`: Suspender una organización.
  - `POST /v1/user-management/suspend`: Suspender las cuentas de usuarios pertenecientes a la organización.
- **Tickets de Jira Relacionados:** [JIRA-201](https://novaly-team.atlassian.net/browse/JIRA-201)
- **Documentación Adicional:**

  - **Tipos en TypeScript:**

    ```ts
    type OrganizationSuspendDto = {
      id: string;
      status: 'SUSPENDED'; // Estado de la organización tras la suspensión
    };

    type UserSuspendDto = {
      id: string;
      status: 'SUSPENDED'; // Estado de la cuenta de usuario tras la suspensión
    };
    ```

## 🧪 Pruebas y Calidad

- [ ] **Unit Tests:** Desarrollar pruebas unitarias para la suspensión de organizaciones y cuentas de usuario.
- [ ] **Integration Tests:** Verificar la integración con la base de datos y API para suspender organizaciones y cuentas de usuario.
- [ ] **QA Check:** Revisión por el equipo de QA para asegurar que la funcionalidad cumple con los requisitos.

## 🚀 Desarrollo

### Tareas

- [x] **Desarrollo de Endpoint para Suspensión de Organización:** Implementar endpoint para suspender una organización.
- [x] **Desarrollo de Endpoint para Suspensión de Cuentas de Usuario:** Implementar endpoint para suspender cuentas de usuario asociadas.
- [ ] **Implementación de Notificación por Correo Electrónico:** Configurar el envío de notificaciones por correo electrónico al administrador de la organización.
- [ ] **Configuración de Roles:** Asegurar que la funcionalidad esté configurada correctamente para el rol Administrador Plataforma.

### Progreso

- **Fecha de Inicio:** 15/09/2024
- **Fecha Estimada de Finalización:** 20/09/2024
- **Desarrolladores Responsables:** Frank Cary, Christian Gomez

## 📷 Capturas de Pantalla / Mockups

- **Capturas de Pantalla:** Incluye imágenes relevantes para la interfaz de suspensión de organización (a añadir).

## 🔄 Cambios Requeridos

- [ ] **Cambio 1:** Ajustar la interfaz para la funcionalidad de suspensión de organización.
- [ ] **Cambio 2:** Asegurar que los estados de las organizaciones y cuentas sean actualizados correctamente.

## 🛠️ Implementación Técnica

### Repositorio y Rama

- **Repositorio:** [Enlace al repositorio]
- **Rama de Desarrollo:** [Nombre de la rama]

### Consideraciones Técnicas

- [ ] **Revisar Compatibilidad:** Asegurarse de que la nueva funcionalidad sea compatible con los módulos existentes.
- [ ] **Actualizar Documentación:** Modificar la documentación técnica si es necesario para reflejar los cambios.

## 📂 Enlaces Relacionados

- [Documentación API](https://back.deocasion.mrmisti.com/docs#/)
- [Guía de Estilo de Código]()

## 📑 Notas y Comentarios

- **Notas Adicionales:** La suspensión debe realizarse de manera que garantice que ninguna actividad de la organización o sus usuarios quede pendiente.

## 📞 Contactos Relevantes

- **Product Owner:** [Nombre y contacto]
- **QA Responsable:** [Nombre y contacto]
- **UI/UX Designer:** [Nombre y contacto]

## 🔍 Revisión Final

- [ ] **Revisión por Product Owner**
- [ ] **Revisión por QA**
- [ ] **Aprobación Final**
