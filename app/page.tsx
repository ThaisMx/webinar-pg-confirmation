"use client"

import { useEffect } from 'react';
import { initializeDataLayer } from '@/lib/gtm';
import ConfirmacaoWebinarComTemporizador from "../confirmacao-webinar-com-temporizador"

export default function SyntheticV0PageForDeployment() {
  useEffect(() => {
    // Inicializa o dataLayer quando a página carregar
    initializeDataLayer();
  }, []);

  return <ConfirmacaoWebinarComTemporizador />
}