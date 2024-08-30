---
id: historia-de-usuario-{{identificador_unico}}
title: Confirmación de Ofertas
tags: [user-history, offer-confirmation, in-progress]
---

## 📋 Descripción General

**Como** [Administrador de Organizacion],  
**Quiero** confirmar las ofertas creadas asociadas a la [Entidad o Evento],  
**Para** registrar la aceptación de la tasación.

## 🎯 Criterios de Aceptación

- [ ] **Funcionalidad Configurada para:** Esta funcionalidad debe estar configurada para [Rol o Usuario por defecto].
- [ ] **Aceptación Masiva de Ofertas:** La funcionalidad debe permitir la aceptación masiva de ofertas.
- [ ] **Mensaje de Confirmación:** Al aceptar, debe mostrarse un mensaje pop-up de confirmación final con el texto: “¿Está seguro de aprobar las xx oferta(s) seleccionada(s)?” con las opciones:
  - Sí
  - No
- [ ] **Acciones Tras Confirmación:**
  - **Si se selecciona "Sí":** Cambiar el estado de las ofertas a [Nuevo Estado].
  - **Si se selecciona "No":** Regresar a la pantalla anterior.
- [ ] **Cambio de Estado del Evento:** Cuando todas las ofertas del evento estén en estado [Estado Final], el estado del evento debe cambiar a [Nuevo Estado del Evento].

## 🔗 Relación con Otros Elementos

- **Épica/Módulo Relacionado:** [JIRA-123](https://novaly-team.atlassian.net/browse/JIRA-123)
- **Endpoints Relacionados:**
  - `POST /v1/offer-management/accept-offers`: Aceptar ofertas.
  - `GET /v1/event-management/status`: Obtener el estado del evento.
- **Tickets de Jira Relacionados:** [JIRA-122](https://novaly-team.atlassian.net/browse/JIRA-122)
- **Documentación Adicional:**

  - **Figma:**
    - [Pantalla de Confirmación de Aceptación](https://www.figma.com/design/7h5bUXzvQMQYmOc7jNNm4b/Subastas-UI?node-id=1521-34420&t=1gF1Kx63LP3LUSWz-4)
  - **Tipos en TypeScript:**

    ```ts
    type OfferAcceptanceDto = {
      offerIds: string[];
    };

    enum OfferStatus {
      Accepted = 'ACCEPTED',
      Pending = 'PENDING',
      Rejected = 'REJECTED',
    }

    type EventStatusDto = {
      eventId: string;
      status: EventStatus;
    };

    enum EventStatus {
      Open = 'OPEN',
      Closed = 'CLOSED',
    }
    ```

## 🧪 Pruebas y Calidad

- [ ] **Unit Tests:** Desarrollar pruebas unitarias para la lógica de aceptación masiva de ofertas y el manejo de mensajes pop-up.
- [ ] **Integration Tests:** Verificar la integración con la base de datos y la API para el cambio de estado de ofertas y eventos.
- [ ] **QA Check:** Revisión por el equipo de QA para asegurar que la funcionalidad cumple con los requisitos.

## 🚀 Desarrollo

### Tareas

- [x] **Desarrollo de Endpoints Requeridos:** Implementar el endpoint para aceptar ofertas.
- [ ] **Desarrollo de la Funcionalidad:** Implementar la lógica para la aceptación masiva de ofertas y el mensaje pop-up de confirmación.
- [ ] **Cambio de Estado del Evento:** Implementar la lógica para cambiar el estado del evento cuando todas las ofertas estén aceptadas.

### Progreso

- **Fecha de Inicio:** 30/08/2024
- **Fecha Estimada de Finalización:** 05/09/2024
- **Desarrolladores Responsables:** Frank Cary, Christian Gomez

## 📷 Capturas de Pantalla / Mockups

- **Capturas de Pantalla:** Incluye imágenes relevantes de la interfaz y visualización esperada (a añadir).

## 🔄 Cambios Requeridos

- [ ] **Cambio 1:** Ajustar la interfaz para mostrar correctamente el mensaje pop-up de confirmación.
- [ ] **Cambio 2:** Asegurar que el estado del evento se actualice correctamente al aceptar todas las ofertas.

## 🛠️ Implementación Técnica

### Repositorio y Rama

- **Repositorio:** [Enlace al repositorio]
- **Rama de Desarrollo:** [Nombre de la rama]

### Consideraciones Técnicas

- [ ] **Revisar Compatibilidad:** Asegurarse de que la nueva funcionalidad sea compatible con los módulos existentes.
- [ ] **Actualizar Documentación:** Modificar la documentación técnica si es necesario para reflejar los cambios.

## 📂 Enlaces Relacionados

- [Mockups en Figma](https://www.figma.com/design/7h5bUXzvQMQYmOc7jNNm4b/Subastas-UI?node-id=1521-34420&t=1gF1Kx63LP3LUSWz-4)
- [Documentación API](https://back.deocasion.mrmisti.com/docs#/)
- [Guía de Estilo de Código]()

## 📑 Notas y Comentarios

- **Notas Adicionales:** La funcionalidad debe ser intuitiva para facilitar la aceptación masiva de ofertas y la confirmación final del cambio de estado.

## 📞 Contactos Relevantes

- **Product Owner:** [Nombre y contacto]
- **QA Responsable:** [Nombre y contacto]
- **UI/UX Designer:** [Nombre y contacto]

## 🔍 Revisión Final

- [ ] **Revisión por Product Owner**
- [ ] **Revisión por QA**
- [ ] **Aprobación Final**
