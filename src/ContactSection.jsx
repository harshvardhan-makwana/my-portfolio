

function ContactSection() {
  return (
    <div className="bg-gray-950">
    <section id="contact" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto bg-gray-900">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Get In <span className="text-blue-500">Touch</span>
      </h2>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a 
          href="mailto:makwanaharshvardhan338@gmail.com" 
          className="inline-block bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg font-medium transition-all hover:scale-105"
        >
          Say Hello
        </a>
        <div className="flex justify-center gap-6 mt-12 text-gray-600">
          <a href="https://github.com/harshvardhan-makwana" target="_blank" className="text-gray-400 hover:text-blue-500">GitHub</a>
          <a href="https://www.linkedin.com/in/harshvardhan-makwana-developer" target="_blank" className="hover:text-blue-500 transition">LinkedIn</a>
        </div>
      </div>
    </section>
    </div>
  )
}
export default ContactSection