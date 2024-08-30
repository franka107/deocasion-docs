---
id: historia-de-usuario-{{identificador_unico}}
title: Retiro de Ofertas
tags: [user-history, offer-management, in-progress]
---

## 📋 Descripción General

**Como** [Rol o Usuario],  
**Quiero** retirar las ofertas creadas asociadas a la [Entidad o Evento],  
**Para** no visualizar las ofertas retiradas.

## 🎯 Criterios de Aceptación

- [ ] **Funcionalidad Configurada para:** Esta funcionalidad debe estar configurada para [Rol o Usuario por defecto].
- [ ] **Retiro Masivo de Ofertas:**
  - **Confirmación Final:** Al retirar ofertas, debe mostrar un mensaje pop-up de confirmación final con el siguiente mensaje: “¿Está seguro de retirar las xx oferta(s) seleccionada(s)?” con opciones: i) Sí y ii) No.
  - **Acción Confirmada:**
    - **Sí:** Al seleccionar “Sí”, debe cambiar el estado de la oferta a [Nuevo Estado].
    - **No:** Al seleccionar “No”, debe regresar a la pantalla anterior.
- [ ] **Visualización de Ofertas:** Las ofertas retiradas no deben visualizarse en el listado de ofertas del evento.
- [ ] **Restricción de Retiro:** No se debe permitir el retiro de ofertas una vez el evento pase a estado [Estado Final del Evento].

## 🔗 Relación con Otros Elementos

- **Épica/Módulo Relacionado:** [JIRA-125](https://novaly-team.atlassian.net/browse/JIRA-125)
- **Endpoints Relacionados:**
  - `POST /v1/offer-management/withdraw-offers`: Iniciar retiro de ofertas.
  - `PATCH /v1/offer-management/update-offer-status`: Actualizar el estado de una oferta.
  - `GET /v1/offer-management/list-offers`: Listar ofertas (debe excluir ofertas retiradas).
- **Tickets de Jira Relacionados:** [JIRA-126](https://novaly-team.atlassian.net/browse/JIRA-126)
- **Documentación Adicional:**

  - **Figma:**
    - [Pantalla de Confirmación de Retiro](https://www.figma.com/design/7h5bUXzvQMQYmOc7jNNm4b/Subastas-UI?node-id=1728-58901&t=1gF1Kx63LP3LUSWz-4)
  - **Tipos en TypeScript:**

    ```ts
    type WithdrawOffersDto = {
      offerIds: string[];
    };

    enum OfferStatus {
      Withdrawn = 'WITHDRAWN', // Estado tras retirar la oferta
      Active = 'ACTIVE', // Estado inicial de una oferta
    }

    enum EventStatus {
      Open = 'OPEN', // Estado inicial del evento
      Closed = 'CLOSED', // Estado final del evento donde no se permiten cambios
    }
    ```

## 🧪 Pruebas y Calidad

- [ ] **Unit Tests:** Desarrollar pruebas unitarias para la lógica de retiro y confirmación de ofertas.
- [ ] **Integration Tests:** Verificar la integración con la base de datos y API para el manejo de retiro de ofertas y cambios de estado.
- [ ] **QA Check:** Revisión por el equipo de QA para asegurar que la funcionalidad cumple con los requisitos.

## 🚀 Desarrollo

### Tareas

- [x] **Desarrollo de Endpoints Requeridos:** Implementar el endpoint para iniciar el retiro de ofertas y actualizar estados.
- [ ] **Desarrollo de la Funcionalidad:** Implementar la lógica para retirar ofertas y gestionar confirmaciones.
- [ ] **Restricción de Retiro:** Implementar la restricción para evitar el retiro de ofertas una vez que el evento esté cerrado.

### Progreso

- **Fecha de Inicio:** 03/09/2024
- **Fecha Estimada de Finalización:** 10/09/2024
- **Desarrolladores Responsables:** Frank Cary, Christian Gomez

## 📷 Capturas de Pantalla / Mockups

- **Capturas de Pantalla:** Incluye imágenes relevantes de la interfaz y visualización esperada (a añadir).

## 🔄 Cambios Requeridos

- [ ] **Cambio 1:** Ajustar la interfaz para la confirmación del retiro de ofertas.
- [ ] **Cambio 2:** Asegurar que las ofertas retiradas no aparezcan en el listado de ofertas del evento.

## 🛠️ Implementación Técnica

### Repositorio y Rama

- **Repositorio:** [Enlace al repositorio]
- **Rama de Desarrollo:** [Nombre de la rama]

### Consideraciones Técnicas

- [ ] **Revisar Compatibilidad:** Asegurarse de que la nueva funcionalidad sea compatible con los módulos existentes.
- [ ] **Actualizar Documentación:** Modificar la documentación técnica si es necesario para reflejar los cambios.

## 📂 Enlaces Relacionados

- [Mockups en Figma](https://www.figma.com/design/7h5bUXzvQMQYmOc7jNNm4b/Subastas-UI?node-id=1728-58901&t=1gF1Kx63LP3LUSWz-4)
- [Documentación API](https://back.deocasion.mrmisti.com/docs#/)
- [Guía de Estilo de Código]()

## 📑 Notas y Comentarios

- **Notas Adicionales:** La funcionalidad debe permitir una interacción clara para el retiro de ofertas y confirmar la acción con un mensaje claro.

## 📞 Contactos Relevantes

- **Product Owner:** [Nombre y contacto]
- **QA Responsable:** [Nombre y contacto]
- **UI/UX Designer:** [Nombre y contacto]

## 🔍 Revisión Final

- [ ] **Revisión por Product Owner**
- [ ] **Revisión por QA**
- [ ] **Aprobación Final**
