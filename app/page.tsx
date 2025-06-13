"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Music,
  Calendar,
  MapPin,
  Shirt,
  FileText,
  Camera,
  Heart,
  Users,
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
  Gift,
  X,
  Send,
} from "lucide-react"

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true)
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [showMusicModal, setShowMusicModal] = useState(false)
  const [showTipsModal, setShowTipsModal] = useState(false)
  const [showGiftModal, setShowGiftModal] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guests: "1",
    song: "",
    artist: "",
  })

  const [countdown, setCountdown] = useState({
    days: 16,
    hours: 23,
    minutes: 12,
    seconds: 37,
  })

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const [playMusic, setPlayMusic] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  const photos = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-10%20at%2015.57.29-af6zGkyWT894vfwJ3FD9VMXhhL5fMl.jpeg",
  
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-10%20at%2015.57.28-zNp0E99E6BgdQV8dnZmCZTY26guWD8.jpeg",
      
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-10%20at%2015.57.29%20%282%29-4rIjn84lxDSWfh18rcIFRVxFSLw77m.jpeg",
     
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-10%20at%2015.57.30%20%281%29-UmRqx2Ot62K4CREzxWHfS0aKO6xYJA.jpeg",
     
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-10%20at%2015.57.30%20%283%29-5mkLTwYRPPkplf6BKJW0PeFmjI8Fwx.jpeg",
     
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-10%20at%2015.57.29%20%283%29-IUtq8pZQGEbc2YD0rnaqo5leKykps4.jpeg",
 
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-10%20at%2015.57.28%20%281%29-IyXeg4BnLHaVYKPGjBhFrnxCVxZfE8.jpeg",
  
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-10%20at%2015.57.29%20%281%29-Hjqjx0OtqlCe7JLW67hY9p2NO7rVMU.jpeg",
   
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-10%20at%2015.57.30-YDAdTk1BjPlyJcDj1QlPmkBy0J4BIH.jpeg",
   
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-10%20at%2015.57.30%20%282%29-O3hXu0psEZdzWe9RnWp2AGFHlaDfvc.jpeg",
      
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6xu5vUgSue3yFPzUCy2rnGyfPi5jiP.png",
      
    },
  ]

  const nextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length)
  }

  const prevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length)
  }

  useEffect(() => {
    const targetDate = new Date("2025-06-28T19:00:00").getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)

        setCountdown({ days, hours, minutes, seconds })
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

const enterWithMusic = () => {
  setShowWelcome(false)
  setPlayMusic(true)

  setTimeout(() => {
    const audio = document.getElementById("bg-music") as HTMLAudioElement | null
    if (audio) {
      audio.volume = 0.4
      audio.play().catch((err) => {
        console.log("Error reproduciendo audio:", err)
      })
    }
  }, 300) 
}

  const enterWithoutMusic = () => {
    setPlayMusic(false)
    setShowWelcome(false)
  }

  const toggleMute = () => {
    const audio = document.querySelector("audio")
    if (audio) {
      if (isMuted) {
        audio.muted = false
        audio.play().catch(console.log)
      } else {
        audio.muted = true
      }
    }
    setIsMuted(!isMuted)
  }

  const handleConfirmSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `¡Hola! Confirmo mi asistencia a los 15 años de Sarah Edith 🌹

*Nombre:* ${formData.name}
*Teléfono:* ${formData.phone}
*Número de invitados:* ${formData.guests}

¡Nos vemos el 28 de junio! 💃✨`

    const whatsappUrl = `https://wa.me/573123456789?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
    setShowConfirmModal(false)
    setFormData({ name: "", phone: "", guests: "1", song: "", artist: "" })
  }

  const handleMusicSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `🎵 Sugerencia de canción para los 15 años de Sarah Royel 🎵

*Canción:* ${formData.song}
*Artista:* ${formData.artist}

¡Espero que la incluyan en la playlist! 🎶💃`

    const whatsappUrl = `https://wa.me/573123456789?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
    setShowMusicModal(false)
    setFormData({ name: "", phone: "", guests: "1", song: "", artist: "" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 via-red-800 to-red-900 relative overflow-x-hidden">
      {/* Modal de bienvenida */}
      {showWelcome && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-b from-red-900 to-red-800 rounded-lg p-12 max-w-lg w-full relative shadow-2xl animate-scale-in">
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/adorno-modal-musica-dtaZOxX5cH72C6exK2kz8FejQ0vPOH.png"
                alt="Decorative roses"
                width={180}
                height={180}
                className="animate-float-gentle opacity-90"
              />
            </div>
            <div className="text-center pt-8">
              <p className="text-amber-200 mb-3 text-lg font-light animate-fade-in">Bienvenidos a la invitación de</p>
              <h3 className="text-6xl font-serif text-amber-100 mb-8 font-bold animate-fade-in-up tracking-wide">
                Sarah Royel
              </h3>
              <p className="text-amber-200 mb-10 text-lg font-light animate-fade-in-delayed">
                La música de fondo es parte de la experiencia
              </p>
              <div className="space-y-4">
                <Button
                  onClick={enterWithMusic}
                  className="w-full bg-amber-200 hover:bg-amber-300 text-red-900 py-4 px-8 rounded-full font-medium text-lg shadow-lg border-none animate-slide-up"
                >
                  Ingresar Con Música
                </Button>
                <Button
                  onClick={enterWithoutMusic}
                  className="w-full bg-amber-200 hover:bg-amber-300 text-red-900 py-4 px-8 rounded-full font-medium text-lg shadow-lg border-none animate-slide-up-delayed"
                >
                  Ingresar Sin Música
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
{playMusic && (
  <audio autoPlay loop id="bg-music">
    <source
    src="/musica.mp3" type="audio/mpeg"
    />
    Tu navegador no soporta audio HTML5.
  </audio>
)}

      {/* Modal Confirmar Asistencia */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full relative shadow-2xl">
            <button
              onClick={() => setShowConfirmModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold text-red-800 mb-6 text-center">Confirmar Asistencia</h3>
            <form onSubmit={handleConfirmSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nombre completo</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Tu número de teléfono"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Número de invitados</label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="1">1 persona</option>
                  <option value="2">2 personas</option>
                  <option value="3">3 personas</option>
                  <option value="4">4 personas</option>
                </select>
              </div>
              <Button
                type="submit"
                className="w-full bg-red-700 hover:bg-red-800 text-white py-3 rounded-full font-medium"
              >
                <Send className="w-4 h-4 mr-2" />
                Enviar por WhatsApp
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Modal Sugerir Música */}
      {showMusicModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full relative shadow-2xl">
            <button
              onClick={() => setShowMusicModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold text-red-800 mb-6 text-center">Sugerir Canción</h3>
            <form onSubmit={handleMusicSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nombre de la canción</label>
                <input
                  type="text"
                  required
                  value={formData.song}
                  onChange={(e) => setFormData({ ...formData, song: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Ej: Despacito"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Artista</label>
                <input
                  type="text"
                  required
                  value={formData.artist}
                  onChange={(e) => setFormData({ ...formData, artist: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Ej: Luis Fonsi"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-red-700 hover:bg-red-800 text-white py-3 rounded-full font-medium"
              >
                <Send className="w-4 h-4 mr-2" />
                Enviar por WhatsApp
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Modal Tips */}
      {showTipsModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full relative shadow-2xl">
            <button
              onClick={() => setShowTipsModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold text-red-800 mb-6 text-center">Tips para la Fiesta</h3>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                <p>La fiesta incluye cena completa y bebidas</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                <p>Habrá fotógrafo profesional durante toda la noche</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                <p>Se solicita puntualidad </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                <p>Habrá servicio de parking disponible</p>
              </div>
            </div>
            <Button
              onClick={() => setShowTipsModal(false)}
              className="w-full mt-6 bg-red-700 hover:bg-red-800 text-white py-3 rounded-full font-medium"
            >
              Entendido
            </Button>
          </div>
        </div>
      )}

      {/* Modal Lluvia de Sobres */}
      {showGiftModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-8 max-w-md w-full relative shadow-2xl">
            <button
              onClick={() => setShowGiftModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-300 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gift className="w-8 h-8 text-amber-800" />
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-4">Lluvia de Sobres</h3>
              <div className="text-amber-800 space-y-4 leading-relaxed">
                <p className="italic text-lg">
                  "Tu presencia es el regalo más valioso que puedes darme en esta noche tan especial."
                </p>
                <p>
                  Si deseas contribuir con algo más, una lluvia de sobres será muy apreciada para ayudarme a comenzar
                  esta nueva etapa de mi vida.
                </p>
                <p className="font-semibold">¡Tu amor y buenos deseos son lo que realmente importa! 💕</p>
              </div>
              <Button
                onClick={() => setShowGiftModal(false)}
                className="w-full mt-6 bg-red-800 hover:bg-red-900 text-white px-12 py-4 rounded-full font-medium text-lg shadow-lg animate-gift-bounce"
              >
                <Gift className="w-6 h-6 mr-3" />
                Lluvia de Sobres
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Botón de silenciar música */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          onClick={toggleMute}
          className={`w-14 h-14 rounded-full ${playMusic ? "bg-red-700/80 hover:bg-red-800" : "bg-gray-500/80 hover:bg-gray-600"} text-white shadow-lg border-2 border-red-600/50 backdrop-blur-sm animate-pulse-gentle`}
        >
          {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
        </Button>
      </div>

      {/* Elementos decorativos flotantes */}
      <div className="fixed top-20 left-10 z-10 pointer-events-none">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flores_Grupo02_A-mYmdbwvvnBAE0v62TiSCjkbuXsJDbo.png"
          alt="Floating flowers"
          width={120}
          height={180}
          className="opacity-30 animate-float-slow"
        />
      </div>
      <div className="fixed top-40 right-20 z-10 pointer-events-none">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flores_Grupo02_C-dwGUMMLGmfB1ioqlhnrOBuSJmMRtNi.png"
          alt="Floating flowers"
          width={110}
          height={150}
          className="opacity-25 animate-float-reverse"
        />
      </div>
      <div className="fixed bottom-40 left-20 z-10 pointer-events-none">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flores_Grupo02_B-h8QrOilIWAN9a297NpOuiZjg04CMKt.png"
          alt="Floating flowers"
          width={90}
          height={90}
          className="opacity-20 animate-float-gentle"
        />
      </div>

      {/* Sección Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden transition-all duration-1000 opacity-100 translate-y-0">
        <div className="w-full h-full grid md:grid-cols-2 relative">
          <div className="relative h-screen md:h-auto overflow-hidden transition-all duration-1200 delay-200 opacity-100 translate-x-0">
            <div className="absolute inset-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6xu5vUgSue3yFPzUCy2rnGyfPi5jiP.png"
                alt="Sarah Royel"
                fill
                priority
                className="object-cover animate-subtle-zoom"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"></div>
            <div className="absolute top-10 left-10 z-10 pointer-events-none">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flores_Grupo02_B-h8QrOilIWAN9a297NpOuiZjg04CMKt.png"
                alt="Decorative flowers"
                width={150}
                height={120}
                className="opacity-60 animate-float-gentle"
              />
            </div>
            <div className="absolute bottom-20 right-20 z-10 pointer-events-none">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flores_Grupo03-Hotp9TDzUhKaQPyUL1HIcDPc9V3kjb.png"
                alt="Decorative flowers"
                width={140}
                height={110}
                className="opacity-50 animate-float-reverse"
              />
            </div>
          </div>
          <div className="relative bg-gradient-to-br from-red-900 to-red-800 flex items-center justify-center p-8 md:p-16 transition-all duration-1200 delay-400 opacity-100 translate-x-0">
            <div className="absolute top-4 right-4 md:top-8 md:right-8 transition-all duration-1000 delay-600 opacity-80 scale-100">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flores_Grupo04-vxzc1yzudU3lq9xduRGgAwAjnFGiQw.png"
                alt="Decorative flowers"
                width={280}
                height={200}
                className="animate-float-gentle"
              />
            </div>
            <div className="text-center text-white max-w-lg relative z-10">
              <div className="inline-block border border-amber-200/60 px-6 py-2 mb-8 transition-all duration-800 delay-700 opacity-100 translate-y-0 animate-border-glow">
                <p className="text-lg md:text-xl font-light tracking-wider text-amber-100">28.06.2025</p>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-4 text-amber-100 leading-none transition-all duration-1000 delay-800 opacity-100 translate-y-0 animate-text-reveal">
                Sarah Royel
              </h1>
              <h2 className="text-2xl md:text-3xl font-light mb-12 text-amber-200 transition-all duration-800 delay-1000 opacity-100 translate-y-0">
                Mis 15 años
              </h2>
              <div className="relative transition-all duration-1000 delay-1200 opacity-100 translate-y-0">
                <div className="text-6xl font-serif text-amber-300/60 absolute -top-4 -left-4 animate-pulse-gentle">
                  "
                </div>
                <p className="text-lg md:text-xl font-light leading-relaxed px-8 text-amber-100 italic">
                  Te espero para compartir la alegría de esa noche que será para mí mágica, inolvidable y única.
                </p>
                <div className="text-6xl font-serif text-amber-300/60 absolute -bottom-8 -right-4 animate-pulse-gentle">
                  "
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 pointer-events-none hidden md:block">
          <svg width="100" height="100%" viewBox="0 0 100 800" className="h-full" preserveAspectRatio="none">
            <path
              d="M 0 0 C 50 200 0 400 0 600 C 0 700 0 800 0 800 L 100 800 L 100 0 Z"
              fill="url(#curveGradient)"
              className="animate-path-morph"
            ></path>
            <defs>
              <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent"></stop>
                <stop offset="100%" stopColor="#7f1d1d"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* Sección Contador */}
      <section className="py-0 bg-gradient-to-r from-red-900 to-red-800 relative transition-all duration-1000 opacity-100 translate-y-0">
        <div className="absolute top-0 left-0 right-0 overflow-hidden transition-all duration-800 delay-200 opacity-100 scale-100">
          <svg viewBox="0 0 1200 120" fill="none" className="w-full h-24" preserveAspectRatio="none">
            <defs>
              <linearGradient id="waveGradientTopBlend" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.9"></stop>
                <stop offset="30%" stopColor="#fde68a" stopOpacity="0.7"></stop>
                <stop offset="70%" stopColor="#f59e0b" stopOpacity="0.5"></stop>
                <stop offset="100%" stopColor="#7f1d1d" stopOpacity="0.3"></stop>
              </linearGradient>
            </defs>
            <path
              d="M0,0 C300,60 600,40 900,60 C1050,70 1150,50 1200,40 L1200,0 Z"
              fill="url(#waveGradientTopBlend)"
              className="animate-wave-flow"
            ></path>
            <path
              d="M0,40 C400,10 800,10 1200,40"
              stroke="#fde68a"
              strokeWidth="1"
              fill="none"
              opacity="0.4"
              className="animate-line-draw-delayed"
            ></path>
          </svg>
        </div>
        <div className="container mx-auto px-4 text-center py-32 relative z-10">
          <div className="relative inline-block transition-all duration-1000 delay-400 opacity-100 scale-100">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-red-900/90 backdrop-blur-sm border-4 border-amber-200/40 flex flex-col items-center justify-center relative shadow-2xl animate-scale-pulse">
              <div className="absolute inset-0 border-2 border-amber-200/30 rounded-full animate-spin-very-slow"></div>
              <div className="absolute inset-4 border border-amber-200/20 rounded-full animate-spin-reverse-slow"></div>
              <div className="absolute -top-8 -right-8 transform rotate-12 transition-all duration-800 delay-600 opacity-100 scale-100">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flores_Grupo01_B-D57auI5MMWjgCe6e0Bf3uiAh7C7dwq.png"
                  alt="Decorative flowers"
                  width={200}
                  height={150}
                  className="animate-float-gentle"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 transform -rotate-12 transition-all duration-800 delay-700 opacity-100 scale-100">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flores_Grupo02_D-UVqWxn9ZOMh24nePEAWpf56vBrAPJA.png"
                  alt="Decorative flowers"
                  width={120}
                  height={120}
                  className="animate-float-reverse"
                />
              </div>
              <p className="text-amber-200 text-3xl mb-4 font-serif transition-all duration-600 delay-800 opacity-100 translate-y-0 animate-text-glow">
                Falta
              </p>
              <div className="flex items-center justify-center gap-4 text-white transition-all duration-800 delay-1000 opacity-100 translate-y-0">
                <div className="text-center px-2 animate-number-pop" style={{ animationDelay: "0.1s" }}>
                  <div className="text-3xl md:text-4xl font-bold">{countdown.days}</div>
                  <div className="text-xs uppercase tracking-wider text-amber-200/80">días</div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-px h-12 bg-amber-200/40"></div>
                </div>
                <div className="text-center px-2 animate-number-pop" style={{ animationDelay: "0.2s" }}>
                  <div className="text-3xl md:text-4xl font-bold">{countdown.hours}</div>
                  <div className="text-xs uppercase tracking-wider text-amber-200/80">hs</div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-px h-12 bg-amber-200/40"></div>
                </div>
                <div className="text-center px-2 animate-number-pop" style={{ animationDelay: "0.3s" }}>
                  <div className="text-3xl md:text-4xl font-bold">{countdown.minutes}</div>
                  <div className="text-xs uppercase tracking-wider text-amber-200/80">min</div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-px h-12 bg-amber-200/40"></div>
                </div>
                <div className="text-center px-2 animate-number-pop" style={{ animationDelay: "0.4s" }}>
                  <div className="text-3xl md:text-4xl font-bold">{countdown.seconds}</div>
                  <div className="text-xs uppercase tracking-wider text-amber-200/80">seg</div>
                </div>
              </div>
              <div className="mt-6 transition-all duration-600 delay-1200 opacity-100 scale-100 animate-heartbeat">
                <Heart className="w-6 h-6 text-amber-200" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden transition-all duration-800 delay-300 opacity-100 scale-100">
          <svg viewBox="0 0 1200 120" fill="none" className="w-full h-24" preserveAspectRatio="none">
            <defs>
              <linearGradient id="waveGradientBottomBlend" x1="0%" y1="100%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7f1d1d" stopOpacity="0.3"></stop>
                <stop offset="30%" stopColor="#f59e0b" stopOpacity="0.5"></stop>
                <stop offset="70%" stopColor="#fde68a" stopOpacity="0.7"></stop>
                <stop offset="100%" stopColor="#fef3c7" stopOpacity="0.9"></stop>
              </linearGradient>
            </defs>
            <path
              d="M0,120 C300,60 600,80 900,60 C1050,50 1150,70 1200,80 L1200,120 Z"
              fill="url(#waveGradientBottomBlend)"
              className="animate-wave-flow-reverse"
            ></path>
            <path
              d="M0,80 C400,110 800,110 1200,80"
              stroke="#fde68a"
              strokeWidth="1"
              fill="none"
              opacity="0.4"
              className="animate-line-draw"
            ></path>
          </svg>
        </div>
      </section>

      {/* Sección Fiesta */}
      <section className="py-20 bg-white relative transition-all duration-1000 opacity-100 translate-y-0">
        <div className="absolute top-5 left-5 transition-all duration-800 delay-200 opacity-100 scale-100">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flores_Grupo02_A-mYmdbwvvnBAE0v62TiSCjkbuXsJDbo.png"
            alt="Decorative flowers"
            width={100}
            height={70}
            className="animate-sway"
          />
        </div>
        <div className="absolute top-10 right-5 transition-all duration-800 delay-300 opacity-100 scale-100">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flores_Grupo02_C-dwGUMMLGmfB1ioqlhnrOBuSJmMRtNi.png"
            alt="Decorative flowers"
            width={90}
            height={65}
            className="animate-sway-reverse"
          />
        </div>
        <div className="absolute bottom-10 left-10 transition-all duration-800 delay-400 opacity-100 scale-100">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flores_Grupo03-Hotp9TDzUhKaQPyUL1HIcDPc9V3kjb.png"
            alt="Decorative flowers"
            width={100}
            height={70}
            className="animate-float-gentle"
          />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 transition-all duration-800 delay-500 opacity-100 translate-y-0">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg animate-bounce-gentle">
                <Users className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-4xl font-serif text-red-800 mb-6 font-bold animate-slide-up">Fiesta</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div className="space-y-6 transition-all duration-800 delay-700 opacity-100 translate-y-0 animate-card-hover">
                <h6 className="font-bold text-red-800 text-lg uppercase tracking-wide">Día</h6>
                <p className="text-gray-700 text-lg">Sábado 28 de Junio - 19:00hs</p>
                <a
                  href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Fiesta%20de%2015%20años%20de%20Sarah%20Edith&dates=20250628T190000/20250629T020000&details=Te%20espero%20para%20compartir%20la%20alegría%20de%20esa%20noche%20que%20será%20para%20mí%20mágica,%20inolvidable%20y%20única.&location=Salón%20Romano%20-%20Absolut,%20Av%20NQS%20No.1-79,%20Bogotá"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-full font-medium animate-button-glow">
                    <Calendar className="w-5 h-5 mr-2" />
                    Agendar
                  </Button>
                </a>
              </div>
              <div className="space-y-6 transition-all duration-800 delay-800 opacity-100 translate-y-0 animate-card-hover">
                <h6 className="font-bold text-red-800 text-lg uppercase tracking-wide">Lugar</h6>
                <p className="text-gray-700 text-lg font-medium">Salón Romano - Absolut</p>
                <Button
                  onClick={() => setShowConfirmModal(true)}
                  className="bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-full font-medium animate-button-glow"
                >
                  Confirmar asistencia
                </Button>
              </div>
              <div className="space-y-6 transition-all duration-800 delay-900 opacity-100 translate-y-0 animate-card-hover">
                <h6 className="font-bold text-red-800 text-lg uppercase tracking-wide">Dirección</h6>
                <p className="text-gray-700 text-lg">Av NQS No.1-79, Bogotá</p>
                <a
                  href="https://maps.google.com/?q=Salón+Romano+Absolut+Av+NQS+No.1-79+Bogotá"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-full font-medium animate-button-glow">
                    <MapPin className="w-5 h-5 mr-2" />
                    ¿Cómo llegar?
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Galería */}
      <section className="py-20 bg-gradient-to-r from-red-50 to-red-100 relative transition-all duration-1000 opacity-100 translate-y-0">
        <div className="absolute top-0 left-0 right-0 overflow-hidden transition-all duration-800 delay-200 opacity-100 scale-100">
          <svg viewBox="0 0 1200 80" fill="none" className="w-full h-16" preserveAspectRatio="none">
            <defs>
              <linearGradient id="galleryWaveTop" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="1"></stop>
                <stop offset="50%" stopColor="#fef2f2" stopOpacity="0.8"></stop>
                <stop offset="100%" stopColor="#fecaca" stopOpacity="0.6"></stop>
              </linearGradient>
            </defs>
            <path
              d="M0,80 C300,30 600,10 900,30 C1050,40 1150,60 1200,30 L1200,80 Z"
              fill="url(#galleryWaveTop)"
              className="animate-wave-subtle"
            ></path>
            <path
              d="M0,60 C400,20 800,20 1200,60"
              stroke="#fecaca"
              strokeWidth="1"
              fill="none"
              opacity="0.4"
              className="animate-line-draw-delayed"
            ></path>
          </svg>
        </div>
        <div className="container mx-auto px-4 text-center">
          <div className="absolute top-40 right-10 z-10 pointer-events-none">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flores_Grupo01_B-D57auI5MMWjgCe6e0Bf3uiAh7C7dwq.png"
              alt="Decorative flowers"
              width={180}
              height={135}
              className="opacity-40 animate-sway"
            />
          </div>
          <div className="absolute bottom-40 left-10 z-10 pointer-events-none">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flores_Grupo04-vxzc1yzudU3lq9xduRGgAwAjnFGiQw.png"
              alt="Decorative flowers"
              width={150}
              height={120}
              className="opacity-30 animate-sway-reverse"
            />
          </div>
          <div className="mb-16 transition-all duration-800 delay-400 opacity-100 translate-y-0">
            <h2 className="text-4xl font-serif text-red-800 mb-6 font-bold animate-text-reveal">
              Un recorrido de estos 15 años
            </h2>
            <p className="text-gray-700 text-xl animate-fade-in-up-delayed">
              Junto a personas que son muy importantes en mi vida
            </p>
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mt-8 shadow-lg animate-bounce-gentle">
              <Camera className="w-10 h-10 text-red-600" />
            </div>
          </div>
          <div className="relative max-w-6xl mx-auto transition-all duration-1000 delay-600 opacity-100 scale-100">
            <div className="flex justify-center items-center space-x-6 overflow-hidden">
              <button
                onClick={prevPhoto}
                className="absolute left-0 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transform -translate-y-1/2 top-1/2"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="w-6 h-6 text-red-800" />
              </button>

              <div className="relative w-full max-w-3xl">
                <div className="bg-white p-4 rounded-lg shadow-xl w-full animate-photo-float">
                  <div className="relative">
                    <Image
                      src={photos[currentPhotoIndex].src || "/placeholder.svg"}
                      alt={photos[currentPhotoIndex].alt}
                      width={600}
                      height={400}
                      className="w-full h-auto object-contain rounded max-h-[500px]"
                    />
                    <div className="absolute bottom-4 right-4 bg-red-800/80 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                      {photos[currentPhotoIndex].year}
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={nextPhoto}
                className="absolute right-0 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transform -translate-y-1/2 top-1/2"
                aria-label="Siguiente foto"
              >
                <ChevronRight className="w-6 h-6 text-red-800" />
              </button>
            </div>
            <div className="flex justify-center mt-8 space-x-2">
              {photos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPhotoIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentPhotoIndex ? "bg-red-600 animate-dot-active" : "bg-red-300 hover:bg-red-400"}`}
                  aria-label={`Ir a foto ${i + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden transition-all duration-800 delay-300 opacity-100 scale-100">
          <svg viewBox="0 0 1200 80" fill="none" className="w-full h-16" preserveAspectRatio="none">
            <defs>
              <linearGradient id="galleryWaveBottom" x1="0%" y1="100%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fecaca" stopOpacity="0.6"></stop>
                <stop offset="50%" stopColor="#fef2f2" stopOpacity="0.8"></stop>
                <stop offset="100%" stopColor="#ffffff" stopOpacity="1"></stop>
              </linearGradient>
            </defs>
            <path
              d="M0,0 C300,50 600,50 900,30 C1050,20 1150,10 1200,30 L1200,0 Z"
              fill="url(#galleryWaveBottom)"
              className="animate-wave-subtle-reverse"
            ></path>
            <path
              d="M0,20 C400,60 800,60 1200,20"
              stroke="#fecaca"
              strokeWidth="1"
              fill="none"
              opacity="0.4"
              className="animate-line-draw"
            ></path>
          </svg>
        </div>
      </section>

      {/* Sección Detalles de la Fiesta */}
      <section className="py-20 bg-gradient-to-r from-red-900 to-red-800 relative overflow-hidden transition-all duration-1000 opacity-100 translate-y-0">
        <div className="absolute inset-0 opacity-20 transition-all duration-1000 delay-200 scale-105">
          <Image src="/sarah-bg.jpeg" alt="Fondo Fiesta" fill className="object-cover animate-ken-burns-slow" />
        </div>
        <div className="absolute top-0 left-0 right-0 overflow-hidden transition-all duration-800 delay-200 opacity-100 scale-100">
          <svg viewBox="0 0 1200 60" fill="none" className="w-full h-12" preserveAspectRatio="none">
            <path
              d="M0,60 C400,10 800,10 1200,60"
              stroke="#d4af37"
              strokeWidth="2"
              fill="none"
              opacity="0.6"
              className="animate-line-draw"
            ></path>
            <path
              d="M0,40 C400,0 800,0 1200,40"
              stroke="#d4af37"
              strokeWidth="1"
              fill="none"
              opacity="0.4"
              className="animate-line-draw-delayed"
            ></path>
          </svg>
        </div>
        <div className="absolute top-10 right-10 z-10 pointer-events-none">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flores_Grupo02_A-mYmdbwvvnBAE0v62TiSCjkbuXsJDbo.png"
            alt="Decorative flowers"
            width={120}
            height={90}
            className="opacity-40 animate-float-slow"
          />
        </div>
        <div className="absolute bottom-10 left-10 z-10 pointer-events-none">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flores_Grupo02_C-dwGUMMLGmfB1ioqlhnrOBuSJmMRtNi.png"
            alt="Decorative flowers"
            width={110}
            height={85}
            className="opacity-30 animate-float-reverse"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 transition-all duration-800 delay-400 opacity-100 translate-y-0">
            <h2 className="text-4xl md:text-5xl font-serif text-amber-100 mb-6 font-bold animate-text-glow">Fiesta</h2>
            <p className="text-amber-200 text-xl animate-fade-in-up-delayed">
              Hagamos juntos una fiesta épica. Aquí algunos detalles a tener en cuenta.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl p-8 text-center shadow-2xl transition-all duration-800 delay-600 opacity-100 translate-y-0 animate-card-float">
              <div className="w-16 h-16 bg-amber-300/50 rounded-full flex items-center justify-center mx-auto mb-6 animate-icon-bounce">
                <Music className="w-8 h-8 text-amber-800" />
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-4 uppercase tracking-wide">Música</h3>
              <p className="text-amber-800 mb-6 leading-relaxed">
                ¿Cuál es la canción que no debe faltar en la playlist de la fiesta?
              </p>
              <Button
                onClick={() => setShowMusicModal(true)}
                className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-full font-medium animate-button-pulse"
              >
                Sugerir canción
              </Button>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl p-8 text-center shadow-2xl transition-all duration-800 delay-700 opacity-100 translate-y-0 animate-card-float">
              <div className="w-16 h-16 bg-amber-300/50 rounded-full flex items-center justify-center mx-auto mb-6 animate-icon-bounce">
                <Shirt className="w-8 h-8 text-amber-800" />
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-4 uppercase tracking-wide">Dress Code</h3>
              <p className="text-amber-800 mb-6 leading-relaxed">Una orientación para tu vestuario</p>
              <p className="text-amber-900 font-semibold mb-6">• Formal / Elegante</p>
              <a
                href="https://www.pinterest.com/search/pins/?q=formal%20elegant%20dress%20code%20quincea%C3%B1era%20guest"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-full font-medium animate-button-pulse">
                  Ver más
                </Button>
              </a>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl p-8 text-center shadow-2xl transition-all duration-800 delay-800 opacity-100 translate-y-0 animate-card-float">
              <div className="w-16 h-16 bg-amber-300/50 rounded-full flex items-center justify-center mx-auto mb-6 animate-icon-bounce">
                <FileText className="w-8 h-8 text-amber-800" />
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-4 uppercase tracking-wide">Tips y Notas</h3>
              <p className="text-amber-800 mb-6 leading-relaxed">Información adicional para tener en cuenta</p>
              <Button
                onClick={() => setShowTipsModal(true)}
                className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-full font-medium animate-button-pulse"
              >
                + Info
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Regalos */}
      <section className="py-20 bg-white relative transition-all duration-1000 opacity-100 translate-y-0">
        <div className="absolute top-5 left-5 transition-all duration-800 delay-200 opacity-100 scale-100">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flores_Grupo02_A-mYmdbwvvnBAE0v62TiSCjkbuXsJDbo.png"
            alt="Decorative flowers"
            width={100}
            height={70}
            className="animate-sway"
          />
        </div>
        <div className="absolute top-10 right-5 transition-all duration-800 delay-300 opacity-100 scale-100">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flores_Grupo02_C-dwGUMMLGmfB1ioqlhnrOBuSJmMRtNi.png"
            alt="Decorative flowers"
            width={90}
            height={65}
            className="animate-sway-reverse"
          />
        </div>
        <div className="absolute bottom-10 left-10 transition-all duration-800 delay-400 opacity-100 scale-100">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flores_Grupo03-Hotp9TDzUhKaQPyUL1HIcDPc9V3kjb.png"
            alt="Decorative flowers"
            width={100}
            height={70}
            className="animate-float-gentle"
          />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-16 transition-all duration-800 delay-500 opacity-100 translate-y-0">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg animate-bounce-gentle">
                <Gift className="w-10 h-10 text-amber-600" />
              </div>
              <h3 className="text-4xl font-serif text-red-800 mb-6 font-bold animate-slide-up">Regalos</h3>
              <p className="text-gray-700 text-xl animate-fade-in-up-delayed mb-8">
                Tu presencia es el regalo más valioso que puedes darme
              </p>
              <Button
                onClick={() => setShowGiftModal(true)}
                className="bg-red-800 hover:bg-red-900 text-white px-12 py-4 rounded-full font-medium text-lg shadow-lg animate-gift-bounce"
              >
                <Gift className="w-6 h-6 mr-3" />
                Lluvia de Sobres
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-900 py-16 transition-all duration-1000 opacity-100 translate-y-0 relative overflow-hidden">
        {/* Imagen de fondo del footer */}
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-10%20at%2015.57.29%20%283%29-IUtq8pZQGEbc2YD0rnaqo5leKykps4.jpeg"
            alt="Sarah con su mascota"
            fill
            className="object-cover animate-ken-burns-slow"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="absolute top-10 right-10 z-10 pointer-events-none">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flores_Grupo03-Hotp9TDzUhKaQPyUL1HIcDPc9V3kjb.png"
              alt="Decorative flowers"
              width={150}
              height={120}
              className="opacity-30 animate-float-gentle"
            />
          </div>
          <div className="absolute bottom-20 left-20 z-10 pointer-events-none">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flores_Grupo01_B-D57auI5MMWjgCe6e0Bf3uiAh7C7dwq.png"
              alt="Decorative flowers"
              width={140}
              height={105}
              className="opacity-25 animate-sway"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="text-center md:text-left transition-all duration-800 delay-200 opacity-100 -translate-x-0 animate-fade-in-left">
              <h4 className="text-3xl font-serif text-white mb-3 font-bold">Sarah Royel</h4>
              <h5 className="text-red-200 text-xl">Mis 15 años</h5>
            </div>
          <div className="transition-all duration-800 delay-300 opacity-100 translate-x-0 animate-fade-in-right">
            <div className="flex flex-col md:items-end items-center text-red-200 space-y-3">
              <button
                onClick={() => setShowConfirmModal(true)}
                className="hover:text-white cursor-pointer transition-colors animate-link-hover text-lg"
              >
                Confirmar asistencia a la fiesta
              </button>
              <button
                onClick={() => setShowMusicModal(true)}
                className="hover:text-white cursor-pointer transition-colors animate-link-hover text-lg"
              >
                Sugerir canción
              </button>
              <a
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Fiesta%20de%2015%20años%20de%20Sarah%20Edith&dates=20250628T190000/20250629T020000&details=Te%20espero%20para%20compartir%20la%20alegría%20de%20esa%20noche%20que%20será%20para%20mí%20mágica,%20inolvidable%20y%20única.&location=Salón%20Romano%20-%20Absolut,%20Av%20NQS%20No.1-79,%20Bogotá"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white cursor-pointer transition-colors animate-link-hover text-lg"
              >
                Agendar fiesta
              </a>
            </div>
          </div>

          </div>
          <div className="border-t border-red-800 pt-12 text-center transition-all duration-800 delay-400 opacity-100 translate-y-0 animate-fade-in-up-delayed">
            <p className="text-red-200 text-lg mb-3 font-light italic animate-text-shimmer">
              "Hoy guardo en mi corazón la estrella divina de mi niñez."
            </p>
            <p className="text-red-300 text-lg font-light italic animate-text-shimmer-delayed">
              "Luz que ilumina mi camino a la adolescencia."
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
