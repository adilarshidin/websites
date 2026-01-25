import ReactMarkdown from "react-markdown";
import horarios from "../../content/schedule/horarios.md?raw";

const Horarios = () => {
  return <ReactMarkdown>{horarios}</ReactMarkdown>;
};

export default Horarios;
