---
id: historia-de-usuario-{{identificador_unico}}
title: Iniciar Evento
tags: [user-history, event-management, automated]
---

## 📋 Descripción General

**Como** Plataforma,  
**Quiero** iniciar el evento,  
**Para** realizar las acciones de subasta.

## 🎯 Criterios de Aceptación

- [ ] **Funcionalidad Automática:** La función de iniciar el evento debe ejecutarse automáticamente en base al cumplimiento de la fecha de inicio configurada por la **Organización**.
- [ ] **Cambio de Estado del Evento:** Tras el cumplimiento de la fecha de inicio:
  - El evento pasa a estado **En curso**.
  - Todas las ofertas con estado **Confirmada** del evento pasan a estado **En curso**.
- [ ] **Disponibilidad en Plataforma Web:** Cuando el evento inicia, debe estar disponible en la plataforma web para los **Participantes** desde las 00:00 horas del día de la fecha de inicio.

## 🔗 Relación con Otros Elementos

- **Épica/Módulo Relacionado:** [JIRA-400](https://novaly-team.atlassian.net/browse/JIRA-400)
- **Endpoints Relacionados:**
  - `GET /v1/event-management/start`: Iniciar un evento automáticamente.
  - `GET /v1/offer-management/update-status`: Actualizar el estado de las ofertas del evento.
- **Tickets de Jira Relacionados:** [JIRA-401](https://novaly-team.atlassian.net/browse/JIRA-401)
- **Documentación Adicional:**
  - **Tipos en TypeScript:**
    ```ts
    type EventStartDto = {
      id: string;
      startDate: string; // Iso Format
      status: 'IN_PROGRESS'; // Estado del evento tras el inicio
    };
    ```

## 🧪 Pruebas y Calidad

- [ ] **Unit Tests:** Desarrollar pruebas unitarias para la funcionalidad de inicio de eventos.
- [ ] **Integration Tests:** Verificar la integración con la base de datos y la actualización del estado de las ofertas.
- [ ] **QA Check:** Revisión por el equipo de QA para asegurar que la funcionalidad cumple con los requisitos.

## 🚀 Desarrollo

### Tareas

- [x] **Desarrollo de Endpoint para Iniciar Evento:** Implementar el endpoint para iniciar un evento automáticamente.
- [x] **Actualización del Estado de Ofertas:** Implementar la lógica para cambiar el estado de las ofertas a **En curso**.
- [ ] **Disponibilidad en Plataforma Web:** Asegurar que el evento esté disponible para los participantes desde la fecha de inicio a las 00:00 horas.

### Progreso

- **Fecha de Inicio:** 01/10/2024
- **Fecha Estimada de Finalización:** 07/10/2024
- **Desarrolladores Responsables:** Frank Cary, Christian Gomez

## 📷 Capturas de Pantalla / Mockups

- **Capturas de Pantalla:** Incluye imágenes relevantes para la interfaz de inicio de eventos (a añadir).

## 🔄 Cambios Requeridos

- [ ] **Cambio 1:** Ajustar la lógica automática para iniciar el evento según la fecha configurada.
- [ ] **Cambio 2:** Implementar el cambio de estado de las ofertas y asegurar la disponibilidad del evento en la web.

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

- **Notas Adicionales:** Verificar que la funcionalidad de inicio de eventos se ejecute correctamente y que las ofertas sean actualizadas adecuadamente en la plataforma.

## 📞 Contactos Relevantes

- **Product Owner:** [Nombre y contacto]
- **QA Responsable:** [Nombre y contacto]
- **UI/UX Designer:** [Nombre y contacto]

## 🔍 Revisión Final

- [ ] **Revisión por Product Owner**
- [ ] **Revisión por QA**
- [ ] **Aprobación Final**
