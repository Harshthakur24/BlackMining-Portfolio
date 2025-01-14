import { Heading } from '@react-email/heading';

interface ContactFormEmailProps {
    formData: {
        ownerName: string;
        email: string;
        phoneNumber: string;
        vehicle?: string;
        message?: string;
        formSource: string;
    };
}

export const ContactFormEmail = ({ formData }: ContactFormEmailProps) => {
    return (
        <html>
            <body>
                <div style={styles.section}>
                    <div style={styles.container}>
                        <h1 style={styles.heading}>
                            New Contact Form Submission
                        </h1>
                        <p style={styles.source}>from {formData.formSource}</p>

                        <div style={styles.fieldContainer}>
                            <p style={styles.label}>Name:</p>
                            <p style={styles.value}>{formData.ownerName}</p>
                        </div>

                        <div style={styles.fieldContainer}>
                            <p style={styles.label}>Email:</p>
                            <p style={styles.value}>{formData.email}</p>
                        </div>

                        <div style={styles.fieldContainer}>
                            <p style={styles.label}>Phone:</p>
                            <p style={styles.value}>{formData.phoneNumber}</p>
                        </div>

                        {formData.vehicle && (
                            <div style={styles.fieldContainer}>
                                <p style={styles.label}>Vehicle:</p>
                                <p style={styles.value}>{formData.vehicle}</p>
                            </div>
                        )}

                        {formData.message && (
                            <div style={styles.fieldContainer}>
                                <p style={styles.label}>Message:</p>
                                <p style={styles.value}>{formData.message}</p>
                            </div>
                        )}
                    </div>
                </div>
            </body>
        </html>
    );
};

const styles = {
    section: {
        backgroundColor: '#f3f4f6',
        padding: '48px 0',
    },
    container: {
        margin: '0 auto',
        padding: '32px',
        maxWidth: '600px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    },
    heading: {
        fontSize: '24px',
        lineHeight: '32px',
        fontWeight: '700',
        color: '#111827',
        marginBottom: '4px',
    },
    source: {
        fontSize: '16px',
        color: '#6b7280',
        marginBottom: '24px',
    },
    fieldContainer: {
        marginBottom: '16px',
        borderBottom: '1px solid #e5e7eb',
        paddingBottom: '12px',
    },
    label: {
        fontSize: '14px',
        color: '#6b7280',
        marginBottom: '4px',
    },
    value: {
        fontSize: '16px',
        color: '#111827',
    },
};

export default ContactFormEmail; 