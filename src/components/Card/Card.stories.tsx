import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
    title: "Components/Card",
    component: Card,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        backgroundCard: {
            description: "Color fondo personalizado para la card",
            control: {
                type: "color",
            }
        },
    },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {
        backgroundCard: "#323330",
        children: (
            <>
                <Card.Image 
                    src="https://via.placeholder.com/280x320" 
                    alt="Card Image" 
                    title="Example Image"
                />
                <div>
                    <Card.Title>Título de la Card</Card.Title>
                    <Card.Subtitle>Subtítulo de ejemplo</Card.Subtitle>
                    <Card.Description>
                        Esta es una descripción de ejemplo para mostrar cómo se ve el contenido dentro de la card.
                    </Card.Description>
                    <Card.IconList icons={['fa fa-home', 'fa fa-user', 'fa fa-heart']} />
                </div>
            </>
        ),
    },
};

export const WithoutImage: Story = {
    args: {
        backgroundCard: "#1a1a1a",
        children: (
            <div>
                <Card.Title>Card sin imagen</Card.Title>
                <Card.Subtitle>Solo texto y iconos</Card.Subtitle>
                <Card.Description>
                    Esta card muestra cómo se ve sin una imagen.
                </Card.Description>
                <Card.IconList icons={['fa fa-github', 'fa fa-linkedin', 'fa fa-twitter']} />
            </div>
        ),
    },
};

export const MinimalCard: Story = {
    args: {
        backgroundCard: "#2c3e50",
        children: (
            <div>
                <Card.Title>Card Minimalista</Card.Title>
                <Card.Description>
                    Una card con el contenido mínimo necesario.
                </Card.Description>
            </div>
        ),
    },
};

export const CompleteCard: Story = {
    args: {
        backgroundCard: "#34495e",
        children: (
            <>
                <Card.Image 
                    src="https://via.placeholder.com/280x320/3498db/ffffff" 
                    alt="Profile" 
                />
                <div>
                    <Card.Title>John Doe</Card.Title>
                    <Card.Subtitle>Full Stack Developer</Card.Subtitle>
                    <Card.Description>
                        Desarrollador con experiencia en React, TypeScript, Node.js y bases de datos. 
                        Apasionado por crear interfaces de usuario elegantes y funcionales.
                    </Card.Description>
                    <Card.IconList icons={[
                        'fa fa-github',
                        'fa fa-linkedin',
                        'fa fa-twitter',
                        'fa fa-envelope'
                    ]} />
                </div>
            </>
        ),
    },
};

export const CustomColors: Story = {
    args: {
        backgroundCard: "#e74c3c",
        children: (
            <div>
                <Card.Title>Card Personalizada</Card.Title>
                <Card.Subtitle>Con colores personalizados</Card.Subtitle>
                <Card.Description>
                    Puedes personalizar el color de fondo usando la prop backgroundCard.
                </Card.Description>
            </div>
        ),
    },
};