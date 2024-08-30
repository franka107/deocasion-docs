---
id: historia-de-usuario-{{identificador_unico}}
title: Listado de pujas
tags: [user-history, bid-management, in-progress]
---

## 📋 Descripción General

**Como** Administrador Plataforma o Administrador Organización,  
**Quiero** visualizar las pujas realizadas sobre las ofertas,  
**Para** evaluar y tomar una decisión informada.

## 🎯 Criterios de Aceptación

- [ ] **Funcionalidad Configurada para:** Por defecto, esta funcionalidad debe estar configurada para Administrador Plataforma o Administrador Organización.
- [ ] **Delimitación por Organización:** La funcionalidad debe estar restringida a las organizaciones que poseen ofertas con pujas.
- [ ] **Campos a Mostrar:**
  - Fecha y hora de puja (dd/mm/yyyy - hh:mm [formato 24h])
  - Nombre del cliente
  - Monto (Con separador de miles y decimales en USD)
  - Estado de puja (Ganadora, Desistida, Descartada, Base)
- [ ] **Acciones Permitidas:**
  - Aceptar Puja
  - Rechazar Puja
  - Contraoferta
- [ ] **Filtrado por Estado de Oferta:** La interfaz debe permitir el filtrado de ofertas por estado.

## 🔗 Relación con Otros Elementos

- **Épica/Módulo Relacionado:** [PSD-59](https://novaly-team.atlassian.net/browse/PSD-59)
- **Endpoints Relacionados:**
  - `GET /v1/offer-management/find-offers-with-bid-paginated`: Obtener las ofertas con su puja destacada.
  - `POST /v1/bid-management/accept-bids`: Aceptar una puja. (No esta contemplado el desarrollo en esta historia)
  - `POST /v1/bid-management/reject-bids`: Rechazar una puja. (No esta contemplado el desarrollo en esta historia)
  - `POST /v1/bid-management/counteroffer-bids`: Realizar una contraoferta. (No esta contemplado el desarrollo en esta historia)
- **Tickets de Jira Relacionados:** [PSD-55](https://novaly-team.atlassian.net/browse/PSD-55)
- **Documentación Adicional:**

  - **Figma:**
    - [Pantalla para acceder a ver pujas](https://www.figma.com/design/7h5bUXzvQMQYmOc7jNNm4b/Subastas-UI?node-id=1727-58818&t=1gF1Kx63LP3LUSWz-4)
    - [Pantalla del listado de pujas](https://www.figma.com/design/7h5bUXzvQMQYmOc7jNNm4b/Subastas-UI?node-id=1403-111987&t=1gF1Kx63LP3LUSWz-4)
  - **Tipos en TypeScript:**

    ```ts
    type OfferWithBidDto = {
      id: string;
      title: string;
      appraisal: number;
      bid: {
        createdAt: string; // Iso Format
        amount: number;
        status: BidStatus;
      };
    };

    enum BidStatus {
      Base = 'BASE', // Base
      GivenUp = 'GIVEN_UP', // Desistida
      Winner = 'WINNER', // Ganadora
      Discarded = 'DISCARDED', // Descartada
    }
    ```

## 🧪 Pruebas y Calidad

- [ ] **Unit Tests:** Desarrollar pruebas unitarias para la visualización de pujas y los filtros.
- [ ] **Integration Tests:** Verificar la integración con la base de datos y la API.
- [ ] **QA Check:** Revisión completa por el equipo de QA para asegurar que la funcionalidad cumpla con los requisitos establecidos.

## 🚀 Desarrollo

### Tareas

- [x] **Desarrollo de Endpoints Requeridos:** Implementar los endpoints necesarios para listar y gestionar pujas.
- [ ] **Desarrollo de la Funcionalidad:** Implementar la visualización de pujas.
- [ ] **Configuración de Roles:** Configurar la funcionalidad para los roles Administrador Plataforma y Administrador Organización.
- [ ] **Implementación de Filtros:** Desarrollar la funcionalidad de filtrado por estado de oferta.

### Progreso

- **Fecha de Inicio:** 29/08/2024
- **Fecha Estimada de Finalización:** 02/09/2024
- **Desarrolladores Responsables:** Frank Cary, Christian Gomez

## 📷 Capturas de Pantalla / Mockups

- **Capturas de Pantalla:** Incluye imágenes relevantes de la interfaz y visualización esperada (a añadir).

## 🔄 Cambios Requeridos

- [ ] **Cambio 1:** Ajustar la vista para incluir el campo 'Estado de Puja'.
- [ ] **Cambio 2:** Modificar la lógica de filtrado para reflejar nuevas opciones de estado.

## 🛠️ Implementación Técnica

### Repositorio y Rama

- **Repositorio:** [Enlace al repositorio]
- **Rama de Desarrollo:** [Nombre de la rama]

### Consideraciones Técnicas

- [ ] **Revisar Compatibilidad:** Asegurarse de que la nueva funcionalidad sea compatible con los módulos existentes.
- [ ] **Actualizar Documentación:** Modificar la documentación técnica si es necesario para reflejar los cambios.

## 📂 Enlaces Relacionados

- [Mockups en Figma](https://www.figma.com/design/7h5bUXzvQMQYmOc7jNNm4b/Subastas-UI?node-id=1403-111444&t=SiecE2rwaEBflJOj-1)
- [Documentación API](https://back.deocasion.mrmisti.com/docs#/)
- [Guía de Estilo de Código]()

## 📑 Notas y Comentarios

- **Notas Adicionales:** La visualización debe ser intuitiva para facilitar una rápida evaluación de las ofertas con sus pujas.

## 📞 Contactos Relevantes

- **Product Owner:** [Nombre y contacto]
- **QA Responsable:** [Nombre y contacto]
- **UI/UX Designer:** [Nombre y contacto]

## 🔍 Revisión Final

- [ ] **Revisión por Product Owner**
- [ ] **Revisión por QA**
- [ ] **Aprobación Final**
