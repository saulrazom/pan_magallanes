import { ref, onMounted, onUnmounted } from 'vue'

export function useMobileDetection(breakpoint: number = 768) {
  const isMobile = ref(false)

  const updateSize = () => {
    if (typeof window !== 'undefined') {
      isMobile.value = window.innerWidth < breakpoint
    }
  }

  onMounted(() => {
    // Verificar el tamaño inicial
    updateSize()
    
    // Agregar listener para cambios de tamaño
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateSize)
    }
  })

  onUnmounted(() => {
    // Limpiar el listener cuando el componente se desmonte
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', updateSize)
    }
  })

  return {
    isMobile
  }
}