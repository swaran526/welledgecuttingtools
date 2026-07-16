import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, Bot, ChevronRight } from 'lucide-react'

// Predefined dialogue responses
const BOT_RESPONSES = {
  menu: {
    text: "Hello! Welcome to WECT (Well Edge Cutting Tools). How can I assist you with your machining requirements today?",
    options: [
      { label: "🛠️ Explore Products", action: "explore_products" },
      { label: "📐 Request Custom Tooling", action: "start_lead_capture" },
      { label: "🏭 About WECT", action: "about_company" },
      { label: "📞 Get in Touch", action: "get_in_touch" }
    ]
  },
  explore_products: {
    text: "We manufacture high-precision cutting tools engineered for high performance CNC milling. Which category would you like to explore?",
    options: [
      { label: "⚙️ Carbide & Cobalt End Mills", action: "prod_end_mills" },
      { label: "🔍 Reamers, Drills & Slot Drills", action: "prod_drills" },
      { label: "📐 Taps, Milling & Custom Tools", action: "prod_other" },
      { label: "🔙 Back to Main Menu", action: "go_to_menu" }
    ]
  },
  about_company: {
    text: "WECT has been a trusted partner in precision tooling. Based in Bangalore, India, we specialize in high-performance standard & custom carbide and cobalt cutting tools. Today, we proudly serve customers across diverse industries, including automotive, aerospace, medical, die & mold, and general engineering.",
    options: [
      { label: "🚀 Core Pillars", action: "strengths" },
      { label: "🏭 Manufacturing Excellence", action: "process" },
      { label: "🔙 Back to Main Menu", action: "go_to_menu" }
    ]
  },
  get_in_touch: {
    text: "You can reach our sales and application engineering teams directly:\n\n📞 Phone: +91 99008 58297\n✉️ Email: info@wecttools.com\n\nAlternatively, you can request a callback by clicking 'Request Callback' below.",
    options: [
      { label: "📱 Request Callback", action: "start_lead_capture" },
      { label: "📧 Email Directly", href: "mailto:info@wecttools.com" },
      { label: "🔙 Back to Main Menu", action: "go_to_menu" }
    ]
  },
  strengths: {
    text: "Our core pillars include:\n\n• Quality Commitment: Uncompromising commitment to superior quality in every single product, verified using digital micron inspection tools.\n• Engineering Excellence: Ground profile optimization explicitly matching tool setups to custom micro-honed geometries.\n• Metallurgical Integrity: Premium grain carbide substrates and PVD coatings configured to maximize tool life under heavy feeds.",
    options: [
      { label: "📐 Request Custom Tooling", action: "start_lead_capture" },
      { label: "🔙 Back to Main Menu", action: "go_to_menu" }
    ]
  },
  process: {
    text: "Our manufacturing process covers 6 critical stages:\n\n1. Tool Design & Engineering (CAD/CAM)\n2. CNC Raw Machining (Blanks pre-shaping)\n3. Heat Treatment (Thermal hardening)\n4. Grinding (5-axis multi-axis grinding)\n5. Metrology Inspection (Dimensional accuracy check)\n6. Packaging & Dispatch (Cleaned & protective coated dispatch)",
    options: [
      { label: "🛠️ Explore Products", action: "explore_products" },
      { label: "🔙 Back to Main Menu", action: "go_to_menu" }
    ]
  },
  prod_end_mills: {
    text: "This group contains:\n\n• Carbide End Mills: High-performance variable helix geometries for vibration-free roughing.\n• Cobalt End Mills: High heat red-hardness end mills for heavy carbon steel removal.\n• Roughing End Mills: Serrated profile chip breakers for reduced cycle times.\n• Ball Nose End Mills: Precision ground ball nose tools for 3D profiling.",
    options: [
      { label: "View Carbide End Mills", scrollId: "products", filter: "Carbide End Mills" },
      { label: "View Cobalt End Mills", scrollId: "products", filter: "Cobalt End Mills" },
      { label: "View Roughing End Mills", scrollId: "products", filter: "Roughing End Mills" },
      { label: "View Ball Nose End Mills", scrollId: "products", filter: "Ball Nose End Mills" },
      { label: "🔙 Back to Products Menu", action: "explore_products" }
    ]
  },
  prod_drills: {
    text: "This group contains:\n\n• Slot Drills: 2-flute slot drills with precise center-cutting capability.\n• Drill Bits: Solid carbide twist drills with fast chip clearance.\n• Reamers: Multi-fluted reamers for finishing holes with micron-level tolerances.",
    options: [
      { label: "View Slot Drills", scrollId: "products", filter: "Slot Drills" },
      { label: "View Drill Bits", scrollId: "products", filter: "Drill Bits" },
      { label: "View Reamers", scrollId: "products", filter: "Reamers" },
      { label: "🔙 Back to Products Menu", action: "explore_products" }
    ]
  },
  prod_other: {
    text: "This group contains:\n\n• Taps: Spiral point and spiral flute taps for clean internal threading.\n• Milling Cutters: Indexable face mills and side slotting cutters.\n• Custom Cutting Tools: Bespoke profile form cutters built to custom blueprints.",
    options: [
      { label: "View Taps", scrollId: "products", filter: "Taps" },
      { label: "View Milling Cutters", scrollId: "products", filter: "Milling Cutters" },
      { label: "View Custom Cutting Tools", scrollId: "products", filter: "Custom Cutting Tools" },
      { label: "🔙 Back to Products Menu", action: "explore_products" }
    ]
  }
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [inputText, setInputText] = useState('')
  const [leadStep, setLeadStep] = useState(0) // 0: inactive, 1: name, 2: contact/email, 3: requirement
  const [leadData, setLeadData] = useState({ name: '', contact: '', msg: '' })

  const chatEndRef = useRef(null)

  useEffect(() => {
    // Add default welcoming menu on mount
    resetChat()
  }, [])

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  function resetChat() {
    setMessages([
      {
        id: 'welcome',
        sender: 'bot',
        text: BOT_RESPONSES.menu.text,
        options: BOT_RESPONSES.menu.options
      }
    ])
  }

  const addBotMessage = (text, options = []) => {
    setMessages((prev) => [
      ...prev,
      {
        id: `bot_${Date.now()}`,
        sender: 'bot',
        text,
        options
      }
    ])
  }

  const addUserMessage = (text) => {
    setMessages((prev) => [
      ...prev,
      {
        id: `user_${Date.now()}`,
        sender: 'user',
        text
      }
    ])
  }

  const handleAction = (option) => {
    addUserMessage(option.label)

    if (option.scrollId) {
      setTimeout(() => {
        const el = document.getElementById(option.scrollId)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
        if (option.filter && window.onSelectCategoryFilter) {
          window.onSelectCategoryFilter(option.filter)
        }
      }, 300)
      return
    }

    setTimeout(() => {
      if (option.action === 'go_to_menu') {
        resetChat()
      } else if (option.action === 'start_lead_capture') {
        setLeadStep(1)
        addBotMessage("I can forward your custom tooling specs directly to our B2B sales office. May I start by asking for your name?")
      } else if (BOT_RESPONSES[option.action]) {
        const resp = BOT_RESPONSES[option.action]
        addBotMessage(resp.text, resp.options)
      } else {
        addBotMessage("How else can I help you?", BOT_RESPONSES.menu.options)
      }
    }, 500)
  }

  const handleSendText = (e) => {
    e.preventDefault()
    if (!inputText.trim()) return

    const userText = inputText.trim()
    addUserMessage(userText)
    setInputText('')

    setTimeout(() => {
      if (leadStep > 0) {
        handleLeadCapture(userText)
      } else {
        processInquiry(userText)
      }
    }, 600)
  }

  const sendChatbotLead = async (data) => {
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || 'YOUR_API_KEY_HERE'
    if (!accessKey || accessKey === 'YOUR_API_KEY_HERE') {
      console.warn('Web3Forms access key is not configured in .env file. Skipping email sending.')
      return
    }

    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          from_name: `${data.name} | WECT Chatbot`,
          replyto: data.contact.includes('@') ? data.contact : undefined,
          subject: `Chatbot Lead Capture - ${data.name}`,
          name: data.name,
          email: data.contact.includes('@') ? data.contact : 'no-email-provided@wecttools.com',
          "Contact Info": data.contact,
          message: data.msg
        })
      })
    } catch (e) {
      console.error('Failed to submit chatbot lead to Web3Forms:', e)
    }
  }

  const handleLeadCapture = (input) => {
    if (leadStep === 1) {
      setLeadData(prev => ({ ...prev, name: input }))
      setLeadStep(2)
      setTimeout(() => {
        addBotMessage(`Nice to meet you, ${input}! Please provide your email address or phone number so our engineering team can contact you.`)
      }, 500)
    } else if (leadStep === 2) {
      setLeadData(prev => ({ ...prev, contact: input }))
      setLeadStep(3)
      setTimeout(() => {
        addBotMessage("Great. Lastly, please describe what kind of tools or technical specifications you need.")
      }, 500)
    } else if (leadStep === 3) {
      const finalData = { ...leadData, msg: input }
      setLeadData(finalData)
      setLeadStep(0)

      // Save lead to local storage
      const existingLeads = JSON.parse(localStorage.getItem('wect_leads') || '[]')
      existingLeads.push({ ...finalData, timestamp: new Date().toISOString() })
      localStorage.setItem('wect_leads', JSON.stringify(existingLeads))

      sendChatbotLead(finalData)

      setTimeout(() => {
        addBotMessage(`Thank you, ${finalData.name}! Your request has been recorded. Our application engineer will contact you at ${finalData.contact} within 1 business day.`, [
          { label: "🔙 Back to Main Menu", action: "go_to_menu" }
        ])
      }, 500)
    }
  }

  const processInquiry = (query) => {
    const text = query.toLowerCase()

    if (text.includes('product') || text.includes('tool') || text.includes('carbide') || text.includes('end mill') || text.includes('reamer') || text.includes('drill')) {
      addBotMessage("We manufacture standard & custom tools (Carbide End Mills, Cobalt End Mills, Drills, Taps, etc.). Select a group to explore:", BOT_RESPONSES.explore_products.options)
    } else if (text.includes('custom') || text.includes('design') || text.includes('quote') || text.includes('price')) {
      setLeadStep(1)
      addBotMessage("I can forward your custom tool drawing or specification request to our engineering team. May I know your name first?")
    } else if (text.includes('contact') || text.includes('phone') || text.includes('mail') || text.includes('email') || text.includes('address') || text.includes('where')) {
      addBotMessage(BOT_RESPONSES.get_in_touch.text, BOT_RESPONSES.get_in_touch.options)
    } else if (text.includes('about') || text.includes('company') || text.includes('history')) {
      addBotMessage(BOT_RESPONSES.about_company.text, BOT_RESPONSES.about_company.options)
    } else {
      addBotMessage("I'm not sure about that, but I can get you to the right place. Please choose one of the options below:", BOT_RESPONSES.menu.options)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 font-body">
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-wect-red via-wect-red-light to-wect-red rounded-full flex items-center justify-center text-white shadow-lg border border-white/15 transition-all duration-300 relative cursor-pointer outline-none hover:shadow-glow-red"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageSquare size={22} />
              <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border border-wect-red rounded-full">
                <span className="absolute inset-0 rounded-full bg-wect-red-light animate-ping opacity-80" />
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="absolute bottom-20 right-0 bg-wect-navy-light/95 backdrop-blur-xl border border-white/10 rounded-3xl w-80 sm:w-[370px] h-[490px] sm:h-[530px] max-h-[calc(100vh-120px)] shadow-2xl flex flex-col overflow-hidden z-50 text-white"
          >
            {/* HUD Scan Line Effect */}
            <div className="absolute inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-wect-red-light/30 to-transparent pointer-events-none z-20" style={{ top: '0%', animation: 'scanLine 5s linear infinite' }} />

            {/* Header */}
            <div className="bg-[#050810]/90 border-b border-white/5 p-4 flex items-center justify-between flex-shrink-0 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-wect-red-light relative">
                  <Bot size={20} />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border border-wect-navy-light rounded-full animate-pulse shadow-[0_0_8px_#10b981]" />
                </div>
                <div>
                  <h4 className="text-white text-xs font-display font-black tracking-wide uppercase">WECT CHATBOT AI</h4>
                  <p className="text-[9px] text-wect-red-light font-mono uppercase tracking-widest leading-none mt-1">Always Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/40 hover:text-white transition-colors cursor-pointer p-1"
                aria-label="Close chatbot"
              >
                <X size={18} />
              </button>
            </div>

            {/* Message Body */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-[#04070e]/85 bg-blueprint-grid relative z-10 no-scrollbar">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="space-y-2"
                >
                  <div className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} items-start gap-2.5`}>
                    {msg.sender === 'bot' && (
                      <div className="w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-wect-red-light text-xs flex-shrink-0 mt-0.5">
                        <Bot size={12} />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] rounded-2xl p-3 text-xs leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-gradient-to-r from-wect-blue to-wect-blue-light border border-white/10 text-white font-medium rounded-tr-none shadow-md shadow-wect-blue/10'
                          : 'bg-white/[0.03] border border-white/[0.08] text-white/95 rounded-tl-none whitespace-pre-line shadow-xs font-light'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>

                  {/* Options */}
                  {msg.sender === 'bot' && msg.options && msg.options.length > 0 && (
                    <div className="pl-8.5 flex flex-col gap-2 pt-1.5 max-w-[88%]">
                      {msg.options.map((opt, idx) => (
                        opt.href ? (
                          <a
                            key={idx}
                            href={opt.href}
                            className="text-left bg-white/[0.02] hover:bg-white/[0.08] border border-white/5 hover:border-wect-red-light/35 text-white/80 hover:text-white py-2 px-3.5 rounded-xl text-[10px] font-bold tracking-wide uppercase transition-all duration-200 flex items-center justify-between group shadow-sm shrink-0"
                          >
                            <span>{opt.label}</span>
                            <ChevronRight size={12} className="text-wect-red-light opacity-0 group-hover:opacity-100 transition-all duration-350" />
                          </a>
                        ) : (
                          <button
                            key={idx}
                            onClick={() => handleAction(opt)}
                            className="text-left bg-white/[0.02] hover:bg-white/[0.08] border border-white/5 hover:border-wect-red-light/35 text-white/80 hover:text-white py-2 px-3.5 rounded-xl text-[10px] font-bold tracking-wide uppercase transition-all duration-200 cursor-pointer flex items-center justify-between group shadow-sm shrink-0"
                          >
                            <span>{opt.label}</span>
                            <ChevronRight size={12} className="text-wect-red-light opacity-0 group-hover:opacity-100 transition-all duration-350" />
                          </button>
                        )
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Input Bar */}
            <form onSubmit={handleSendText} className="p-3 bg-[#050810]/95 border-t border-white/5 flex gap-2 flex-shrink-0 items-center relative z-10">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={leadStep > 0 ? "Type here..." : "Ask WECT..."}
                className="flex-grow bg-[#03060c] border border-white/5 focus:border-wect-red-light/40 focus:shadow-[0_0_12px_rgba(196,18,48,0.25)] text-white rounded-xl px-4 py-2.5 text-xs outline-none transition-all placeholder:text-white/30"
              />
              <button
                type="submit"
                className="w-8.5 h-8.5 rounded-xl bg-wect-red text-white flex items-center justify-center hover:bg-wect-red-light transition-all shadow-md hover:shadow-glow-red hover:scale-102 cursor-pointer flex-shrink-0 outline-none border border-white/10"
              >
                <Send size={12} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
