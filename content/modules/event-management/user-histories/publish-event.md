---
id: historia-de-usuario-{{identificador_unico}}
title: Publicacion de Evento
tags: [user-history, event-management, in-progress]
---

## 📋 Descripción General

**Como** Administrador Plataforma,  
**Quiero** publicar un evento,  
**Para** mostrar el evento a los participantes en la página web.

## 🎯 Criterios de Aceptación

- [ ] **Funcionalidad Configurada para:** Esta funcionalidad debe estar configurada para **Administrador Plataforma**.
- [ ] **Condiciones para Publicar el Evento:**
  - Todas las ofertas deben tener estado **Confirmada**.
  - La fecha de inicio del evento no debe estar vencida.
- [ ] **Mensajes de Error:** Si alguna condición no se cumple, se deben mostrar mensajes específicos detallando el problema.
- [ ] **Mensaje de Confirmación:** Al seleccionar “Publicar evento”, se debe mostrar un mensaje de confirmación con el siguiente resumen:
  - **Fecha Inicio**
  - **Fecha Fin**
  - **Hora de Cierre**
  - **Cantidad de Ofertas**
  - **Sumatoria de Tasación**
- [ ] **Cambio de Estado:** Tras la confirmación, el estado del evento debe cambiar a **Publicado**.
- [ ] **Orden de Término de Ofertas:** Cada oferta debe tener una hora de culminación con 03 minutos de diferencia de forma consecutiva. El orden de término de ofertas debe establecerse según el orden de las ofertas creadas.
  - **Oferta 1:** Termina a 1:00 PM
  - **Oferta 2:** Termina a 1:03 PM
  - **Oferta 3:** Termina a 1:06 PM
  - **Oferta n:** Termina en (hora inicio + n x número de ofertas)

## 🔗 Relación con Otros Elementos

- **Épica/Módulo Relacionado:** [JIRA-300](https://novaly-team.atlassian.net/browse/JIRA-300)
- **Endpoints Relacionados:**
  - `POST /v1/event-management/publish`: Publicar un evento.
  - `GET /v1/offer-management/confirmed-offers`: Obtener ofertas confirmadas para el evento.
- **Tickets de Jira Relacionados:** [JIRA-301](https://novaly-team.atlassian.net/browse/JIRA-301)
- **Documentación Adicional:**
  - **Tipos en TypeScript:**

    ```ts
    type EventPublishDto = {
      id: string;
      startDate: string; // Iso Format
      endDate: string; // Iso Format
      closingTime: string; // Iso Format
      offerCount: number;
      totalAppraisal: number;
      status: 'PUBLISHED'; // Estado del evento tras la publicación
    };
    ```

## 🧪 Pruebas y Calidad

- [ ] **Unit Tests:** Desarrollar pruebas unitarias para la funcionalidad de publicación de eventos.
- [ ] **Integration Tests:** Verificar la integración con la base de datos y API para la publicación de eventos y ofertas.
- [ ] **QA Check:** Revisión por el equipo de QA para asegurar que la funcionalidad cumple con los requisitos.

## 🚀 Desarrollo

### Tareas

- [x] **Desarrollo de Endpoint para Publicar Evento:** Implementar el endpoint para publicar un evento.
- [x] **Desarrollo de Mensajes de Error:** Implementar mensajes de error para condiciones no cumplidas.
- [ ] **Implementación de Confirmación de Publicación:** Configurar el mensaje de confirmación con el resumen del evento.
- [ ] **Configuración del Orden de Término de Ofertas:** Asegurar que cada oferta tenga una hora de culminación con 03 minutos de diferencia de forma consecutiva.

### Progreso

- **Fecha de Inicio:** 01/10/2024
- **Fecha Estimada de Finalización:** 07/10/2024
- **Desarrolladores Responsables:** Frank Cary, Christian Gomez

## 📷 Capturas de Pantalla / Mockups

- **Capturas de Pantalla:** Incluye imágenes relevantes para la interfaz de publicación de eventos (a añadir).

## 🔄 Cambios Requeridos

- [ ] **Cambio 1:** Ajustar la interfaz para la funcionalidad de publicación de eventos.
- [ ] **Cambio 2:** Configurar el orden de término de ofertas de acuerdo con los requisitos.

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

- **Notas Adicionales:** Asegurarse de que la publicación del evento se realice correctamente y que todos los participantes puedan visualizar el evento en la página web.

## 📞 Contactos Relevantes

- **Product Owner:** [Nombre y contacto]
- **QA Responsable:** [Nombre y contacto]
- **UI/UX Designer:** [Nombre y contacto]

## 🔍 Revisión Final

- [ ] **Revisión por Product Owner**
- [ ] **Revisión por QA**
- [ ] **Aprobación Final**
