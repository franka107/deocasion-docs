---
id: historia-de-usuario-{{identificador_unico}}
title: Historial de tasaciones
tags: [user-history, audit, in-progress]
---

## 📋 Descripción General

**Como** Administrador Plataforma, Administrador Organización,  
**Quiero** visualizar el historial de debate de ofertas,  
**Para** mantener una trazabilidad de los cambios realizados en la tasación.

## 🎯 Criterios de Aceptación

- [ ] **Funcionalidad Configurada para:** Esta funcionalidad debe estar configurada para **Administrador Plataforma** y **Administrador Organización**.
- [ ] **Visualización de Historial:** Debe permitir visualizar el historial de debate de ofertas.
- [ ] **Campos a Mostrar:**
  - **Fecha y Hora:** La fecha y hora en que se realizó el debate.
  - **Usuario:** El usuario que realizó el debate.
  - **Monto Inicial:** El monto de tasación antes del debate.
  - **Monto Modificado:** El monto de tasación después del debate.

## 🔗 Relación con Otros Elementos

- **Épica/Módulo Relacionado:** [PSD-48](https://novaly-team.atlassian.net/browse/PSD-48)
- **Endpoints Relacionados:**
  - `GET /v1/audit/find-audit-histories`: Obtener el historial de tasaciones.
  - Backend ya lo dara ordenado, asi que no front no debe preocuparse por eso
- **Tickets de Jira Relacionados:** [PSD-40](https://novaly-team.atlassian.net/browse/PSD-40)
- **Documentación Adicional:**

  - **Figma:**
    - [Pantalla de Historial de Debate](https://www.figma.com/design/7h5bUXzvQMQYmOc7jNNm4b/Subastas-UI?node-id=1467-48256&t=812XUNk83O6rBg6K-4)
  - **Tipos en TypeScript:**

## 🧪 Pruebas y Calidad

- [ ] **Unit Tests:** Desarrollar pruebas unitarias para la recuperación y visualización del historial de debates.
- [ ] **Integration Tests:** Verificar la integración con la base de datos y API para obtener el historial de debates.
- [ ] **QA Check:** Revisión por el equipo de QA para asegurar que la funcionalidad cumple con los requisitos.

## 🚀 Desarrollo

### Tareas

- [x] **Desarrollo de Endpoint:** Implementar endpoint para obtener el historial de debates de ofertas.
- [ ] **Desarrollo de la Funcionalidad:** Implementar la visualización del historial de debates.
- [ ] **Configuración de Roles:** Asegurar que la funcionalidad esté configurada correctamente para los roles Administrador Plataforma y Administrador Organización.

### Progreso

- **Fecha de Inicio:** 10/09/2024
- **Fecha Estimada de Finalización:** 15/09/2024
- **Desarrolladores Responsables:**​⬤
