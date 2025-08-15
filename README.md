# Rubrica Contatti - Frontend React

## 🎯 Scopo del progetto

Realizza una rubrica contatti interamente in React, gestendo tutto lato frontend.

## 🚀 Funzionalità principali

- Visualizzare una lista di contatti ✅
- Aggiungere un nuovo contatto✅
- Modificare un contatto esistente❌
- Eliminare un contatto⚠️ al refresh torna all arr originale per via della chiamata delete che non ho
- Ricercare un contatto per nome in tempo reale✅
- Salvare i contatti nel `localStorage` per mantenere i dati dopo il refresh❌
- Caricare i dati iniziali dall’API pubblica `https://randomuser.me/api/?results=10&seed=reactcontacts`✅

## 🚀 Funzionalità avanzate

- Usare React Context API per gestire lo stato globale dei contatti✅
- Implementare routing con React Router (`/`, `/add`)✅
- Creare un form multifield per aggiungere/modificare contatti✅ , con validazione base (nome obbligatorio, email valida)⚠️
- Ottimizzare le performance con `useMemo` e `useCallback` (per filtro e callback)❌
- Utilizzare `useRef` per migliorare l’esperienza utente (autofocus input)❌
- Gestire notifiche di conferma (alert o toast) dopo le azioni CRUD
- Applicare un design pulito, moderno✅ e responsive⚠️
