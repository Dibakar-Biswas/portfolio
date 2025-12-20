import { useRef } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";

const Contact = () => {
  const formRef = useRef();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async () => {
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      //   toast.success("Message sent successfully 🚀");
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully to Dibakar",
        icon: "success",
        confirmButtonText: "OK",
      });
      reset();
    } catch (error) {
      //   toast.error("Failed to send message ❌");
      Swal.fire({
        title: "Error!",
        text: "Something is wrong",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 max-w-3xl mx-auto w-full relative z-10"
    >
      <Toaster position="top-right" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Get{" "}
          <span className="text-primary border-b-4 border-primary pb-2">
            In Touch
          </span>
        </h2>

        <div className="bg-[#0a0a0a] p-8 md:p-12 rounded-[2rem] border border-gray-800 shadow-2xl">
          <form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Your Name"
                className="w-full bg-[#111] border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary"
              />

              <input
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                
                type="email"
                placeholder="Your Email"
                className="w-full bg-[#111] border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>

            <input
              {...register("subject")}
              type="text"
              placeholder="Subject"
              className="w-full bg-[#111] border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary"
            />

            <textarea
              {...register("message", { required: true })}
              rows="5"
              placeholder="Your Message"
              className="w-full bg-[#111] border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary resize-none"
            ></textarea>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary text-black font-bold py-3 px-10 rounded-full shadow-[0_0_15px_rgba(0,238,255,0.4)] hover:shadow-[0_0_25px_rgba(0,238,255,0.6)] hover:scale-105 transition-all duration-300 disabled:opacity-60"
              >
                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </div>
          </form>
       

        </div>
      </motion.div>
    </section>
  );
};

export default Contact;




