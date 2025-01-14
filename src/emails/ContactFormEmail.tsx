import {
    Html,
    Body,
    Container,
    Tailwind,
    Text,
    Heading,
} from '@react-email/components'

interface ContactFormEmailProps {
    formData: {
        ownerName: string
        email: string
        phoneNumber: string
        vehicle?: string
        message?: string
        formSource: string
    }
}

export default function ContactFormEmail({ formData }: ContactFormEmailProps) {
    return (
        <Html>
            <Tailwind>
                <Body className="bg-gray-100">
                    <Container className="p-8 rounded-lg shadow-lg bg-white my-8">
                        <Heading className="text-2xl font-bold text-gray-800 mb-4">
                            New Contact Form Submission
                        </Heading>

                        <div className="space-y-4">
                            <div>
                                <Text className="font-semibold text-gray-700">Name:</Text>
                                <Text className="text-gray-600">{formData.ownerName}</Text>
                            </div>

                            <div>
                                <Text className="font-semibold text-gray-700">Email:</Text>
                                <Text className="text-gray-600">{formData.email}</Text>
                            </div>

                            <div>
                                <Text className="font-semibold text-gray-700">Phone:</Text>
                                <Text className="text-gray-600">{formData.phoneNumber}</Text>
                            </div>

                            {formData.vehicle && (
                                <div>
                                    <Text className="font-semibold text-gray-700">Vehicle:</Text>
                                    <Text className="text-gray-600">{formData.vehicle}</Text>
                                </div>
                            )}

                            {formData.message && (
                                <div>
                                    <Text className="font-semibold text-gray-700">Message:</Text>
                                    <Text className="text-gray-600">{formData.message}</Text>
                                </div>
                            )}

                            <div className="mt-8 pt-4 border-t border-gray-200">
                                <Text className="text-sm text-gray-500">
                                    Source: {formData.formSource}
                                </Text>
                            </div>
                        </div>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
} 