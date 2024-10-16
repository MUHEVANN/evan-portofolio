import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    desc: "087812418286",
  },
  {
    icon: <FaEnvelope />,
    title: "email",
    desc: "muhammadevankusyanto@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    desc: "Sendangrejo, Karanganom, Klaten Utara",
  },
];

function Contact() {
  return (
    <section className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              action=""
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3>Let's Work Together</h3>
              <p className="text-white/60">
                Feel free to reach out if you have any questions, project ideas,
                or collaboration opportunities. I'm always open to connecting
                and exploring new possibilities. Let's create something amazing
                together!
              </p>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <Input placeholder="Firstname" />
                <Input placeholder="Lastname" />
                <Input placeholder="Email" type="email" />
                <Input placeholder="Phone" type="number" />
              </div>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Services" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Services</SelectLabel>
                    <SelectItem value="frontend">
                      Front End Developer
                    </SelectItem>
                    <SelectItem value="backend">Back End Developer</SelectItem>
                    <SelectItem value="fullstack">
                      Full Stack Developer
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea className="h-[200px]" placeholder="Write The Message" />

              <Button size="md" className="max-w-40 py-3">
                Send Message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, i) => (
                <li key={i} className="flex items-center gap-6">
                  <div className="bg-[#27272c] p-2 text-accent">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.desc}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
