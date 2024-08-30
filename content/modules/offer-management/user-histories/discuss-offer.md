---
id: historia-de-usuario-{{identificador_unico}}
title: Debate de Ofertas
tags: [user-history, offer-debate, in-progress]
---

## 📋 Descripción General

**Como** [Rol o Usuario],  
**Quiero** debatir las ofertas creadas asociadas a la [Entidad o Evento],  
**Para** observar y sugerir los precios de la tasación.

## 🎯 Criterios de Aceptación

- [ ] **Funcionalidad Configurada para:** Esta funcionalidad debe estar configurada para [Rol o Usuario por defecto].
- [ ] **Debate de Ofertas:**
  - **Visualización:** Al debatir la oferta seleccionada, debe permitir a la [Rol o Usuario] visualizar el bien a debatir y el precio de tasación actual.
  - **Colocación de Contrapropuesta:** Debe permitir ingresar una contrapropuesta (numérico de 6 dígitos como máximo).
  - **Debate Individual:** El debate es individual para cada oferta.
- [ ] **Cambio de Estado de la Oferta:** Se debe cambiar el estado de la oferta a [Nuevo Estado] al confirmar la nueva propuesta de la [Rol o Usuario].
- [ ] **Cambio de Estado del Evento:**
  - **Primera Oferta Debatida:** Si es la primera oferta debatida, se debe cambiar el estado del evento a [Nuevo Estado del Evento] y enviar notificaciones ([PSD-43](https://novaly-team.atlassian.net/browse/PSD-43)).
  - **Múltiples Debates:** Si se mantienen múltiples debates sobre una misma oferta, se debe almacenar la información ([PSD-40](https://novaly-team.atlassian.net/browse/PSD-40)).

## 🔗 Relación con Otros Elementos

- **Épica/Módulo Relacionado:** [JIRA-124](https://novaly-team.atlassian.net/browse/JIRA-124)
- **Endpoints Relacionados:**
  - `POST /v1/offer-management/debate-offer`: Iniciar debate sobre una oferta.
  - `PATCH /v1/offer-management/update-offer-status`: Actualizar el estado de una oferta.
  - `PATCH /v1/event-management/update-status`: Cambiar el estado del evento.
- **Tickets de Jira Relacionados:** [JIRA-123](https://novaly-team.atlassian.net/browse/JIRA-123)
- **Documentación Adicional:**

  - **Figma:**
    - [Pantalla de Debate de Ofertas](https://www.figma.com/design/7h5bUXzvQMQYmOc7jNNm4b/Subastas-UI?node-id=1601-38911&t=1gF1Kx63LP3LUSWz-4)
  - **Tipos en TypeScript:**

    ```ts
    type OfferDebateDto = {
      offerId: string;
      counterProposal: number; // Máximo 6 dígitos
    };

    enum OfferStatus {
      Debated = 'DEBATED', // Estado tras confirmar propuesta
      Awaiting = 'AWAITING', // Estado inicial de una oferta
    }

    type EventStatusDto = {
      eventId: string;
      status: EventStatus;
    };

    enum EventStatus {
      InDebate = 'IN_DEBATE', // Estado cuando hay ofertas debatidas
      Closed = 'CLOSED', // Estado final del evento
    }
    ```

## 🧪 Pruebas y Calidad

- [ ] **Unit Tests:** Desarrollar pruebas unitarias para la lógica de debate y cambio de estado de ofertas.
- [ ] **Integration Tests:** Verificar la integración con la base de datos y API para el manejo de debates y estados de ofertas y eventos.
- [ ] **QA Check:** Revisión por el equipo de QA para asegurar que la funcionalidad cumple con los requisitos.

## 🚀 Desarrollo

### Tareas

- [x] **Desarrollo de Endpoints Requeridos:** Implementar el endpoint para iniciar debates sobre ofertas y actualizar estados.
- [ ] **Desarrollo de la Funcionalidad:** Implementar la lógica para debatir ofertas y gestionar contrapropuestas.
- [ ] **Cambio de Estado de la Oferta y Evento:** Implementar la lógica para actualizar el estado de ofertas y eventos según corresponda.

### Progreso

- **Fecha de Inicio:** 01/09/2024
- **Fecha Estimada de Finalización:** 08/09/2024
- **Desarrolladores Responsables:** Frank Cary, Christian Gomez

## 📷 Capturas de Pantalla / Mockups

- **Capturas de Pantalla:** Incluye imágenes relevantes de la interfaz y visualización esperada (a añadir).

## 🔄 Cambios Requeridos

- [ ] **Cambio 1:** Ajustar la interfaz para la visualización de la oferta y contrapropuesta.
- [ ] **Cambio 2:** Asegurar que los estados de ofertas y eventos se actualicen correctamente.

## 🛠️ Implementación Técnica

### Repositorio y Rama

- **Repositorio:** [Enlace al repositorio]
- **Rama de Desarrollo:** [Nombre de la rama]

### Consideraciones Técnicas

- [ ] **Revisar Compatibilidad:** Asegurarse de que la nueva funcionalidad sea compatible con los módulos existentes.
- [ ] **Actualizar Documentación:** Modificar la documentación técnica si es necesario para reflejar los cambios.

## 📂 Enlaces Relacionados

- [Mockups en Figma](https://www.figma.com/design/7h5bUXzvQMQYmOc7jNNm4b/Subastas-UI?node-id=1601-38911&t=1gF1Kx63LP3LUSWz-4)
- [Documentación API](https://back.deocasion.mrmisti.com/docs#/)
- [Guía de Estilo de Código]()

## 📑 Notas y Comentarios

- **Notas Adicionales:** La funcionalidad debe permitir una interacción clara y eficiente para debatir ofertas y registrar contrapropuestas.

## 📞 Contactos Relevantes

- **Product Owner:** [Nombre y contacto]
- **QA Responsable:** [Nombre y contacto]
- **UI/UX Designer:** [Nombre y contacto]

## 🔍 Revisión Final

- [ ] **Revisión por Product Owner**
- [ ] **Revisión por QA**
- [ ] **Aprobación Final**
