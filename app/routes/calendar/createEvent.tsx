// Posibles usos
import {
  Group,
  Input,
  ColorInput,
  Button,
  Textarea,
  Card,
  Image,
  Text,
  Badge,
} from "@mantine/core";
import "dayjs/locale/es-mx";
import { DatePicker } from "@mantine/dates";
import type { ActionFunction, ActionArgs } from "@remix-run/node"; // or cloudflare/deno
import { Link, useActionData } from "@remix-run/react";
export const action: ActionFunction = async ({ request }) => {
  const body = new URLSearchParams(await request.text());
  const title = body.get("title");
  const description = body.get("description");
  const date = body.get("date");
  const personas = body.get("personas");
  const color = body.get("color");
  const time = body.get("time");
  return {
    title,
    description,
    date,
    time,
    personas,
    color,
  };
};

type Props = {};

export default function createEvent(props: Props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const data = useActionData<ActionArgs>();
  console.log("====================================");
  console.log(data);
  console.log("====================================");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return (
    <>
      {/* Aqui podria estar todos los inputs */}
      <Group
        position="left"
        className="gap-10 flex flex-col h-screen col-span-2"
      >
        {/* Podemos crear dos rutas para en esta parte los formularios */}
        {/* Digamos que podemos una ruta para el evento y otra ruta sería para hacer texto del correo y un preview */}
        <div className="container flex">
          <Link to={"/calendar"}>
            <Button title="Atras" className="bg-cyan-900" size="lg">
              Atras
            </Button>
          </Link>
        </div>
        <form method="post">
          <Input.Wrapper
            id="input-demo"
            withAsterisk
            label="Titutlo del evento"
            description="Please enter your credit card information, we need some money"
            size="xl"
          >
            <Input
              id="input-demo"
              placeholder="Your email"
              name="title"
              size="lg"
            />
          </Input.Wrapper>
          {/* Date Picker */}
          <DatePicker
            label="Fecha de inicio"
            placeholder="Selecciona la fecha"
            locale="es-mx"
            size="xl"
            withAsterisk
            required
            name="date"
            description="Please enter your credit card information, we need some money"
          />
          <Input.Wrapper
            id="input-demo"
            withAsterisk
            label="Personas dirigidas"
            description="Porfavor selecciona las personas a las que va dirigido el evento"
            size="xl"
          >
            <Input
              id="input-demo"
              placeholder="Personas dirigidas"
              name="personas"
              size="lg"
            />
          </Input.Wrapper>
          <Input.Wrapper
            id="input-demo"
            withAsterisk
            label="Hora del evento"
            description="Porfavor coloque la hora de inicio y final de la siguiente manera: 12:00 - 13:00"
            size="xl"
          >
            <Input
              id="input-demo"
              placeholder="Hora del evento"
              name="time"
              size="lg"
            />
          </Input.Wrapper>
          <ColorInput
            label="Color del evento"
            description="Please enter your credit card information, we need some money"
            withAsterisk
            required
            name="color"
            size="xl"
            format="hex"
            swatches={[
              "#25262b",
              "#868e96",
              "#fa5252",
              "#e64980",
              "#be4bdb",
              "#7950f2",
              "#4c6ef5",
              "#228be6",
              "#15aabf",
              "#12b886",
              "#40c057",
              "#82c91e",
              "#fab005",
              "#fd7e14",
            ]}
          />
          <Textarea
            label="Descripcion del evento"
            description="Please enter your credit card information, we need some money"
            name="description"
            withAsterisk
            required
            size="xl"
          />
          {/* Preview para la tarjeta */}
          <Button title="Crear" className="bg-cyan-900" size="lg" type="submit">
            Crear
          </Button>
        </form>
      </Group>
      <Group className="container" position="center">
        {/* Se podria tener aqui el "Markdown editor y abajo un preview de que como se va a mostrar" */}
        <Card shadow="sm" p="lg" radius="md" withBorder>
          <Card.Section>
            <Image
              src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>Norway Fjord Adventures</Text>
            <Badge color="pink" variant="light">
              On Sale
            </Badge>
          </Group>

          <Text size="sm" color="dimmed">
            With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway
          </Text>

          <Button variant="light" color="blue" fullWidth mt="md" radius="md">
            Book classic tour now
          </Button>
        </Card>
      </Group>
    </>
  );
}
