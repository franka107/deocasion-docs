---
id: tarea-{{identificador_unico}}
title: Modificacion de Tasacion
tags: [task, offer-management, in-progress]
---

## 📋 Descripción General

**Como** Administrador Plataforma,  
**Quiero** atender las ofertas con estado **DEBATIDA**,  
**Para** registrar la tasación acordada.

## 🎯 Criterios de Aceptación

- [ ] **Funcionalidad Configurada para:** Esta funcionalidad debe estar configurada para **Administrador Plataforma**.
- [ ] **Modificar Importes:** Debe permitir modificar el importe de la tasación según lo acordado con la **Organización**.
- [ ] **Cambio de Estado de Oferta:** Al confirmar la nueva tasación, el estado de la oferta debe cambiar de **DEBATIDA** a **CREADA**.
- [ ] **Cambio de Estado del Evento:** Si no hay ofertas con estado **DEBATIDA**, el estado del evento debe cambiar a **CREADO**.
- [ ] **Registro de Cambios:** Los cambios deben ser almacenados en [PSD-40](https://novaly-team.atlassian.net/browse/PSD-40) - Historial de Tasaciones.

## 🔗 Relación con Otros Elementos

- **Épica/Módulo Relacionado:** [JIRA-127](https://novaly-team.atlassian.net/browse/JIRA-127)
- **Endpoints Relacionados:**
  - `PATCH /v1/offer-management/update-appraisal`: Actualizar el importe de la tasación de una oferta.
  - `PATCH /v1/event-management/update-event-status`: Cambiar el estado del evento si no hay ofertas debatidas.
  - `POST /v1/offer-management/record-appraisal-history`: Registrar la tasación en el historial de tasaciones.
- **Tickets de Jira Relacionados:** [JIRA-128](https://novaly-team.atlassian.net/browse/JIRA-128)
- **Documentación Adicional:**

  - **Figma:**
    - [Pantalla de Modificación de Tasación](https://www.figma.com/design/7h5bUXzvQMQYmOc7jNNm4b/Subastas-UI?node-id=1729-59012&t=1gF1Kx63LP3LUSWz-4)
  - **Tipos en TypeScript:**

    ```ts
    type UpdateAppraisalDto = {
      offerId: string;
      newAppraisalAmount: number;
    };

    enum OfferStatus {
      Debated = 'DEBATIDA', // Estado antes de la confirmación
      Created = 'CREADA', // Estado después de la confirmación
    }

    enum EventStatus {
      Created = 'CREADO', // Estado final del evento si no hay ofertas debatidas
    }
    ```

## 🧪 Pruebas y Calidad

- [ ] **Unit Tests:** Desarrollar pruebas unitarias para la lógica de modificación de tasación y cambio de estado de la oferta.
- [ ] **Integration Tests:** Verificar la integración con la base de datos y API para el registro de tasaciones y cambios de estado.
- [ ] **QA Check:** Revisión por el equipo de QA para asegurar que la funcionalidad cumple con los requisitos.

## 🚀 Desarrollo

### Tareas

- [x] **Desarrollo de Endpoints Requeridos:** Implementar endpoints para modificar tasación y registrar cambios.
- [ ] **Desarrollo de la Funcionalidad:** Implementar la lógica para modificar tasación y cambiar estados.
- [ ] **Registro en Historial:** Implementar el registro de cambios en el historial de tasaciones.

### Progreso

- **Fecha de Inicio:** 04/09/2024
- **Fecha Estimada de Finalización:** 11/09/2024
- **Desarrolladores Responsables:** Frank Cary, Christian Gomez

## 📷 Capturas de Pantalla / Mockups

- **Capturas de Pantalla:** Incluye imágenes relevantes de la interfaz para modificar la tasación y el estado de la oferta (a añadir).

## 🔄 Cambios Requeridos

- [ ] **Cambio 1:** Ajustar la interfaz para la modificación de tasación y visualización del estado de la oferta.
- [ ] **Cambio 2:** Asegurar que los cambios se registren correctamente en el historial de tasaciones.

## 🛠️ Implementación Técnica

### Repositorio y Rama

- **Repositorio:** [Enlace al repositorio]
- **Rama de Desarrollo:** [Nombre de la rama]

### Consideraciones Técnicas

- [ ] **Revisar Compatibilidad:** Asegurarse de que la nueva funcionalidad sea compatible con los módulos existentes.
- [ ] **Actualizar Documentación:** Modificar la documentación técnica si es necesario para reflejar los cambios.

## 📂 Enlaces Relacionados

- [Mockups en Figma](https://www.figma.com/design/7h5bUXzvQMQYmOc7jNNm4b/Subastas-UI?node-id=1729-59012&t=1gF1Kx63LP3LUSWz-4)
- [Documentación API](https://back.deocasion.mrmisti.com/docs#/)
- [Guía de Estilo de Código]()

## 📑 Notas y Comentarios

- **Notas Adicionales:** Asegurarse de que la modificación de tasación y los cambios de estado sean intuitivos y fáciles de usar para los administradores.

## 📞 Contactos Relevantes

- **Product Owner:** [Nombre y contacto]
- **QA Responsable:** [Nombre y contacto]
- **UI/UX Designer:** [Nombre y contacto]

## 🔍 Revisión Final

- [ ] **Revisión por Product Owner**
- [ ] **Revisión por QA**
- [ ] **Aprobación Final**
