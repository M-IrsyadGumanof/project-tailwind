const Footer = () => {
  return (
    <div className=" footer bg-white shadow mt-20" id="social">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p className="py-4">&copy; Copyright by <span className="font-bold">Muhammad Irsyad Gumanof</span> </p>
        <div className="social-footer flex items-center sm:gap-7 gap-2">
          <a href="https://www.facebook.com/share/1Qh3JJrKv4/" target="blank"><i className="ri-facebook-circle-fill text-2xl"></i></a>
          <a href="https://www.instagram.com/muhammadirsyadgumanof/" target="blank"><i className="ri-instagram-fill text-2xl"></i></a>
          <a href="https://www.linkedin.com/in/muhammad-irsyad-gumanof/" target="blank"><i className="ri-linkedin-box-fill text-2xl"></i></a>
          <a href="https://www.youtube.com/@muhammadirsyadgumanof" target="blank"><i className="ri-youtube-fill text-2xl"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
