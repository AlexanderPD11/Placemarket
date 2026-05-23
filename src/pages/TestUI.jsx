import Button from "../components/ui/Button"
import Card from "../components/ui/Card"
import Input from "../components/ui/Input"
import Badge from "../components/ui/Badge"
import SectionTitle from "../components/ui/SectionTitle"

const TestUI = () => {
  return (
    <div className="min-h-screen bg-slate-950 p-10 text-white">

      <SectionTitle
        title="Marketplace UI"
        subtitle="Sistema visual profesional"
      />

      <div className="flex gap-4 mb-10">
        <Button>Primary</Button>

        <Button variant="secondary">
          Secondary
        </Button>

        <Button variant="outline">
          Outline
        </Button>
      </div>

      <Card className="max-w-md">
        <h3 className="text-xl font-bold mb-4">
          Publicar necesidad
        </h3>

        <Input
          label="Título"
          placeholder="Necesito instalación eléctrica"
        />

        <div className="flex gap-2 mt-4">
          <Badge>Urgente</Badge>
          <Badge color="green">Activo</Badge>
        </div>
      </Card>

    </div>
  )
}

export default TestUI