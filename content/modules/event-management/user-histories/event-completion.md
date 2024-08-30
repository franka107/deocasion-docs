---
id: historia-de-usuario-{{identificador_unico}}
title: Finalizar Evento
tags: [user-history, event-management, automated]
---

## 📋 Descripción General

**Como** Plataforma,  
**Quiero** finalizar el evento,  
**Para** restringir las actividades sobre las subastas.

## 🎯 Criterios de Aceptación

- [ ] **Funcionalidad Automática:** La función de finalizar el evento debe ejecutarse automáticamente en base al cumplimiento de la fecha y hora de cierre configurada por la **Organización**.
- [ ] **Cambio de Estado de Ofertas:**
  - Las ofertas sin puja deben cambiar su estado a **Cancelada**.
  - Las ofertas con puja deben cambiar su estado a **En revisión**.
- [ ] **Restricciones de Puja:** Las ofertas en estado **En revisión** no deben recibir ninguna puja adicional.
- [ ] **Cambio de Hora de Término:** La hora de término de una oferta puede cambiar si hay interacción (pujas) en el último minuto, añadiendo un tiempo adicional.
- [ ] **Cambio de Estado del Evento:**
  - Cuando todas las ofertas del evento estén en estado **Cancelada**, el evento pasa a estado **Cancelado**.
  - Cuando al menos una oferta esté en estado **En revisión**, el evento pasa a estado **Finalizado**.
- [ ] **Restricción para Participantes:**
  - Al pasar el evento a estado **Finalizado**, los **Participantes** no podrán realizar ninguna puja en la plataforma web.
  - Al cierre del día, el evento se retira de la publicación en la plataforma web.

## 🔗 Relación con Otros Elementos

- **Épica/Módulo Relacionado:** [JIRA-500](https://novaly-team.atlassian.net/browse/JIRA-500)
- **Endpoints Relacionados:**
  - `GET /v1/event-management/finish`: Finalizar un evento automáticamente.
  - `GET /v1/offer-management/update-status`: Actualizar el estado de las ofertas del evento.
- **Tickets de Jira Relacionados:** [JIRA-501](https://novaly-team.atlassian.net/browse/JIRA-501)
- **Documentación Adicional:**

  - **Tipos en TypeScript:**

    ```ts
    type EventFinishDto = {
      id: string;
      finishDate: string; // Iso Format
      status: 'CANCELLED' | 'COMPLETED'; // Estado del evento tras la finalización
    };

    type OfferStatusDto = {
      id: string;
      status: 'CANCELLED' | 'UNDER_REVIEW'; // Estado de las ofertas
    };
    ```

## 🧪 Pruebas y Calidad

- [ ] **Unit Tests:** Desarrollar pruebas unitarias para la funcionalidad de finalización de eventos.
- [ ] **Integration Tests:** Verificar la integración con la base de datos y la actualización del estado de las ofertas.
- [ ] **QA Check:** Revisión por el equipo de QA para asegurar que la funcionalidad cumple con los requisitos.

## 🚀 Desarrollo

### Tareas

- [x] **Desarrollo de Endpoint para Finalizar Evento:** Implementar el endpoint para finalizar un evento automáticamente.
- [x] **Actualización del Estado de Ofertas:** Implementar la lógica para cambiar el estado de las ofertas a **Cancelada** o **En revisión**.
- [x] **Restricción para Participantes:** Asegurar que los participantes no puedan hacer pujas y que el evento se retire de la plataforma web.

### Progreso

- **Fecha de Inicio:** 01/11/2024
- **Fecha Estimada de Finalización:** 07/11/2024
- **Desarrolladores Responsables:** Jane Doe, John Smith

## 📷 Capturas de Pantalla / Mockups

- **Capturas de Pantalla:** Incluye imágenes relevantes para la interfaz de finalización de eventos (a añadir).

## 🔄 Cambios Requeridos

- [ ] **Cambio 1:** Ajustar la lógica automática para finalizar el evento según la fecha y hora configurada.
- [ ] **Cambio 2:** Implementar el cambio de estado de las ofertas y asegurar la restricción de pujas.

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

- **Notas Adicionales:** Verificar que la funcionalidad de finalización de eventos se ejecute correctamente y que las ofertas sean actualizadas adecuadamente en la plataforma.

## 📞 Contactos Relevantes

- **Product Owner:** [Nombre y contacto]
- **QA Responsable:** [Nombre y contacto]
- **UI/UX Designer:** [Nombre y contacto]

## 🔍 Revisión Final

- [ ] **Revisión por Product Owner**
- [ ] **Revisión por QA**
- [ ] **Aprobación Final**
