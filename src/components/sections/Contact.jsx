import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, Send, CheckCircle2, MessageCircle, MapPin, XCircle } from 'lucide-react'

const contactDetails = [
  { 
    icon: Phone, 
    label: 'Call Us', 
    value: '+91 99008 58297', 
    subtext: 'Mon - Sat: 9:00 AM - 6:30 PM', 
    href: 'tel:+919900858297' 
  },
  { 
    icon: Mail, 
    label: 'Email Us', 
    value: 'info@wecttools.com', 
    subtext: 'Response within 24 business hours', 
    href: 'mailto:info@wecttools.com' 
  },
  { 
    icon: MapPin,
    label: 'Address',
    value: 'WECT – Well Edge Cutting Tools',
    subtext: 'Peenya Industrial Area, Bangalore, Karnataka, India',
    href: 'https://maps.google.com'
  }
]

const productCategories = [
  'Solid Carbide End Mills',
  'Solid Carbide Drills',
  'Tungaloy Indexable Tools',
  'Oemeta Coolants & Fluids',
  'Emkay Taps',
  'PCD Boring Tools',
  'Customized Cutters',
]

const headerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
}

const headerItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(null)
  
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', toolType: '', message: ''
  })
  
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  const validateField = (name, value) => {
    let err = ''
    if (name === 'name' && !value.trim()) {
      err = 'Name is required'
    } else if (name === 'company' && !value.trim()) {
      err = 'Company name is required'
    } else if (name === 'email') {
      if (!value.trim()) {
        err = 'Email is required'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        err = 'Invalid email address'
      }
    } else if (name === 'phone' && value.trim()) {
      if (!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/.test(value)) {
        err = 'Invalid phone number format'
      }
    }
    return err
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (touched[name]) {
      const err = validateField(name, value)
      setErrors(prev => ({ ...prev, [name]: err }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    const err = validateField(name, value)
    setErrors(prev => ({ ...prev, [name]: err }))
  }

  const getInputClass = (fieldName) => {
    const isTouched = touched[fieldName]
    const hasError = errors[fieldName]
    
    let base = "w-full bg-[#050912] border text-white text-xs px-4 py-3.5 rounded-xl outline-none transition-all duration-300 focus:ring-0 "
    
    if (isTouched && hasError) {
      return base + "border-wect-red-light focus:border-wect-red-light focus:shadow-[0_0_12px_rgba(168,31,61,0.35)]"
    }
    if (isTouched && !hasError && form[fieldName].trim()) {
      return base + "border-emerald-500/50 focus:border-emerald-500 focus:shadow-[0_0_12px_rgba(16,185,129,0.25)]"
    }
    return base + "border-white/10 focus:border-wect-red-light focus:shadow-[0_0_12px_rgba(168,31,61,0.25)]"
  }

  const renderError = (fieldName) => {
    if (touched[fieldName] && errors[fieldName]) {
      return (
        <span className="text-[10px] text-wect-red-light font-mono mt-1.5 block">
          {errors[fieldName]}
        </span>
      )
    }
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitError(null)

    // Validate all fields on submit
    const newErrors = {}
    const fieldsToValidate = ['name', 'company', 'email', 'phone']
    fieldsToValidate.forEach(key => {
      const err = validateField(key, form[key])
      if (err) newErrors[key] = err
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      const allTouched = {}
      fieldsToValidate.forEach(key => { allTouched[key] = true })
      setTouched(allTouched)
      return
    }

    setIsSubmitting(true)
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || 'YOUR_API_KEY_HERE'

    if (!accessKey || accessKey === 'YOUR_API_KEY_HERE') {
      setTimeout(() => {
        setSubmitted(true)
        setIsSubmitting(false)
      }, 1000)
      return
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          from_name: `${form.name} | WECT Website`,
          replyto: form.email,
          subject: `Contact Request from ${form.name} (${form.company})`,
          name: form.name,
          email: form.email,
          phone: form.phone || 'Not Provided',
          company: form.company,
          "Tool Type / Application": form.toolType || 'Not Selected',
          message: form.message
        })
      })

      const result = await response.json()
      if (result.success) {
        setSubmitted(true)
      } else {
        setSubmitError(result.message || 'Submission failed. Please try again.')
      }
    } catch (error) {
      console.error('Web3Forms Error:', error)
      setSubmitError('Failed to send request. Check your internet connection.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="bg-transparent text-white pt-16 pb-4 lg:pt-20 lg:pb-6 font-body relative overflow-hidden border-t border-white/5"
    >
      <div 
        className="absolute inset-0 bg-blueprint-grid pointer-events-none z-0" 
        style={{ 
          maskImage: 'radial-gradient(circle at 50% 50%, transparent 35%, black 85%)', 
          WebkitMaskImage: 'radial-gradient(circle at 50% 50%, transparent 35%, black 85%)' 
        }} 
      />
      <div className="relative max-w-[92rem] mx-auto px-6 z-10">

        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12 space-y-3"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={headerItemVariants}
            className="font-display font-black uppercase text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-none"
          >
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-wect-red-light">Us</span>
          </motion.h2>

          <motion.p
            variants={headerItemVariants}
            className="text-white/60 text-sm sm:text-base font-light leading-relaxed border-t border-white/5 pt-4"
          >
            Connect with our technical application team. Submit your tool specs or custom blueprints for a detailed cost estimation.
          </motion.p>
        </motion.div>

        {/* Contact info cards + form */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">

          {/* Contact Details Column */}
          <motion.div
            className="lg:col-span-5 flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            {contactDetails.map(({ icon: Icon, label, value, subtext, href }) => (
              <motion.a
                key={label}
                href={href}
                className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl relative overflow-hidden group hover:border-wect-red-light/35 hover:shadow-glass-hover transition-all duration-300 text-white"
                whileHover={{ y: -2 }}
              >
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-white/10 border border-white/15 rounded-xl text-white group-hover:bg-wect-blue group-hover:border-wect-blue transition-all duration-300">
                  <Icon size={18} />
                </div>

                <div className="space-y-1">
                  <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-wect-red-light">{label}</p>
                  <p className="text-white text-sm font-bold tracking-tight">{value}</p>
                  <p className="text-white/50 text-[11px] font-light leading-relaxed">{subtext}</p>
                </div>
              </motion.a>
            ))}

            {/* Direct WhatsApp Quote Button */}
            <motion.a
              href="https://wa.me/919900858297"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-5 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-2xl font-display font-bold uppercase text-xs tracking-wider shadow-lg shadow-[#25D366]/20 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <MessageCircle size={20} className="fill-current" />
              Chat on WhatsApp
            </motion.a>

          </motion.div>

          {/* Form Column */}
          <motion.div
            className="lg:col-span-7 bg-white/5 border border-white/10 rounded-3xl p-8 relative overflow-hidden shadow-glass text-white"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {submitted ? (
              <motion.div
                className="flex flex-col items-center justify-center min-h-[350px] text-center font-body"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/35 flex items-center justify-center text-emerald-400 mb-6 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="font-display font-black uppercase text-xl text-white mb-3 tracking-wide">
                  Enquiry <span className="text-emerald-400">Submitted</span>
                </h3>
                <p className="text-white/60 text-xs sm:text-sm font-light max-w-sm leading-relaxed">
                  Thank you for contacting WECT. Our technical application department will review your specifications and contact you shortly.
                </p>
              </motion.div>
            ) : (
              <div className="space-y-6">
                <h3 className="font-display font-bold uppercase text-lg text-white border-b border-white/5 pb-3">
                  Submit Request for Quote (RFQ)
                </h3>
                
                {submitError && (
                  <motion.div 
                    className="p-4 bg-wect-red/10 border border-wect-red/20 rounded-xl text-xs text-wect-red-light font-mono text-center flex items-center justify-center gap-2 mb-4"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <XCircle size={14} />
                    {submitError}
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text" name="name" value={form.name} onChange={handleChange} onBlur={handleBlur}
                        className={getInputClass('name')}
                        placeholder="Full Name *"
                      />
                      {renderError('name')}
                    </div>
                    <div>
                      <input
                        type="text" name="company" value={form.company} onChange={handleChange} onBlur={handleBlur}
                        className={getInputClass('company')}
                        placeholder="Company Name *"
                      />
                      {renderError('company')}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="email" name="email" value={form.email} onChange={handleChange} onBlur={handleBlur}
                        className={getInputClass('email')}
                        placeholder="Email Address *"
                      />
                      {renderError('email')}
                    </div>
                    <div>
                      <input
                        type="text" name="phone" value={form.phone} onChange={handleChange} onBlur={handleBlur}
                        className={getInputClass('phone')}
                        placeholder="Phone Number"
                      />
                      {renderError('phone')}
                    </div>
                  </div>

                  <div className="relative">
                    <select
                      name="toolType" value={form.toolType} onChange={handleChange}
                      className="w-full bg-[#050912] border border-white/10 focus:border-wect-red-light text-white text-xs px-4 py-3.5 rounded-xl outline-none transition-all duration-300 appearance-none focus:ring-0 cursor-pointer"
                      style={{ backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23ffffff\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'><polyline points=\'6 9 12 15 18 9\'></polyline></svg>")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center', backgroundSize: '16px' }}
                    >
                      <option value="" className="bg-wect-navy">Select Product Category...</option>
                      {productCategories.map(cat => (
                        <option key={cat} value={cat} className="bg-wect-navy">{cat}</option>
                      ))}
                    </select>
                  </div>

                  <textarea
                    name="message" rows={4} value={form.message} onChange={handleChange}
                    className="w-full bg-[#050912] border border-white/10 focus:border-wect-red-light text-white text-xs px-4 py-3.5 rounded-xl outline-none transition-all duration-300 resize-none focus:ring-0"
                    placeholder="Describe tool specifications, work materials, quantities or tolerance demands..."
                  />

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 bg-wect-blue hover:bg-wect-blue-light text-white font-display font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer border border-white/5"
                    whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    <span>{isSubmitting ? 'Sending Enquiry...' : 'Submit RFQ'}</span>
                    <Send size={14} className={isSubmitting ? 'animate-pulse' : ''} />
                  </motion.button>
                </form>
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
