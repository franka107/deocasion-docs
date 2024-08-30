---
id: historia-de-usuario-{{identificador_unico}}
title: Confirmación de Ofertas
tags: [user-history, offer-confirmation, in-progress]
---

> [!SUCCESS]
> El flujo es identico a retirar ofertas

> [!INFO]
> Respecto a acciones multiples por tabla:
>
> 1. Los checkboxes siempre se mostraran en los listados que requieran acciones masivas
> 2. Apenas se seleccione un row en el listado se mostraran las acciones correspondientes y se ocultaran los filtros y las acciones que venian por defecto (por ejemplo la acciones de 'Crear')
> 3. Las acciones apareceran como botones una lista horizontal
> 4. Una vez se culmine la accion se mostrara nuevamente el filtro, las acciones por defecto, y no habra ningun row selccionado

<!-- El flujo es identico a retirar ofertas -->
<!---->
<!-- - Respecto a acciones multiples por tabla: -->
<!--   1. Los checkboxes siempre se mostraran en los listados que requieran acciones masivas -->
<!--   2. Apenas se seleccione un row en el listado se mostraran las acciones correspondientes y se ocultaran los filtros y las acciones que venian por defecto (por ejemplo la acciones de 'Crear') -->
<!--   3. Las acciones apareceran como botones una lista horizontal -->
<!--   4. Una vez se culmine la accion se mostrara nuevamente el filtro, las acciones por defecto, y no habra ningun row selccionado -->

<!-- ## 📋 Descripción General -->
<!---->
<!-- **Como** [Administrador de Organizacion],   -->
<!-- **Quiero** confirmar las ofertas creadas asociadas a la [Organización],   -->
<!-- **Para** registrar la aceptación de la tasación. -->

<!-- ## 🎯 Criterios de Aceptación -->
<!---->
<!-- - [ ] **Funcionalidad Configurada para:** Esta funcionalidad debe estar configurada para [Funcionalidad: Confirmar Ofertas]. -->
<!-- - [ ] **Aceptación Masiva de Ofertas:** La funcionalidad debe permitir la aceptación masiva de ofertas. -->
<!-- - [ ] **Mensaje de Confirmación:** Al aceptar, debe mostrarse un mensaje pop-up de confirmación final con el texto: “¿Está seguro de aprobar las xx oferta(s) seleccionada(s)?” con las opciones: -->
<!--   - Sí -->
<!--   - No -->
<!-- - [ ] **Acciones Tras Confirmación:** -->
<!--   - **Si se selecciona "Sí":** Cambiar el estado de las ofertas a [Confirmed]. -->
<!--   - **Si se selecciona "No":** Regresar a la pantalla anterior. -->
<!-- - [ ] **Cambio de Estado del Evento:** Cuando todas las ofertas del evento estén en estado [Confirmed], el estado del evento debe cambiar a [ReadyToPublish]. -->

## 🔗 Relación con Otros Elementos

- **Épica/Módulo Relacionado:** [PSD-37](https://novaly-team.atlassian.net/browse/PSD-37)
- **Endpoints Relacionados:**

  - `POST /v1/offer-management/confirm-offers`: Confirmar ofertas.
  - body:

  ```jsonc
  // Request:
  {
    "type": "all", // all-empty
    "ids": ["as12-12321"],
  }
  ```

- **Tickets de Jira Relacionados:** [PDS-37](https://novaly-team.atlassian.net/browse/PSD-37)
- **Documentación Adicional:**
  - **Figma:**
    - [Flujo de confirmacion de ofertas](https://www.figma.com/design/7h5bUXzvQMQYmOc7jNNm4b/Subastas-UI?node-id=1403-86452&t=812XUNk83O6rBg6K-4)

<!-- ## 🧪 Pruebas y Calidad -->
<!---->
<!-- - [ ] **Unit Tests:** Desarrollar pruebas unitarias para la lógica de aceptación masiva de ofertas y el manejo de mensajes pop-up. -->
<!-- - [ ] **Integration Tests:** Verificar la integración con la base de datos y la API para el cambio de estado de ofertas y eventos. -->
<!-- - [ ] **QA Check:** Revisión por el equipo de QA para asegurar que la funcionalidad cumple con los requisitos. -->
<!---->
<!-- ## 🚀 Desarrollo -->
<!---->
<!-- ### Tareas -->
<!---->
<!-- - [x] **Desarrollo de Endpoints Requeridos:** Implementar el endpoint para aceptar ofertas. -->
<!-- - [ ] **Desarrollo de la Funcionalidad:** Implementar la lógica para la aceptación masiva de ofertas y el mensaje pop-up de confirmación. -->
<!-- - [ ] **Cambio de Estado del Evento:** Implementar la lógica para cambiar el estado del evento cuando todas las ofertas estén aceptadas. -->
<!---->
<!-- ### Progreso -->
<!---->
<!-- - **Fecha de Inicio:** 30/08/2024 -->
<!-- - **Fecha Estimada de Finalización:** 05/09/2024 -->
<!-- - **Desarrolladores Responsables:** Frank Cary -->
<!---->
<!-- ## 📷 Capturas de Pantalla / Mockups -->
<!---->
<!-- - **Capturas de Pantalla:** Incluye imágenes relevantes de la interfaz y visualización esperada (a añadir). -->
<!---->
<!-- ## 🔄 Cambios Requeridos -->
<!---->
<!-- - [ ] **Cambio 1:** Ajustar la interfaz para mostrar correctamente el mensaje pop-up de confirmación. -->
<!-- - [ ] **Cambio 2:** Asegurar que el estado del evento se actualice correctamente al aceptar todas las ofertas. -->
<!---->
<!-- ## 🛠️ Implementación Técnica -->
<!---->
<!-- ### Repositorio y Rama -->
<!---->
<!-- - [ ] **Revisar Compatibilidad:** Asegurarse de que la nueva funcionalidad sea compatible con los módulos existentes. -->
<!-- - [ ] **Actualizar Documentación:** Modificar la documentación técnica si es necesario para reflejar los cambios. -->
<!---->

## 📂 Enlaces Relacionados

- [Mockups en Figma](https://www.figma.com/design/7h5bUXzvQMQYmOc7jNNm4b/Subastas-UI?node-id=1521-34420&t=1gF1Kx63LP3LUSWz-4)
- [Documentación API](https://back.deocasion.mrmisti.com/docs#/)
<!-- - [Guía de Estilo de Código]() -->

## 📑 Notas y Comentarios

<!-- ## 📞 Contactos Relevantes -->
<!---->
<!-- ## 🔍 Revisión Final -->
<!---->
<!-- - [ ] **Revisión por Product Owner** -->
<!-- - [ ] **Revisión por QA** -->
<!-- - [ ] **Aprobación Final** -->
