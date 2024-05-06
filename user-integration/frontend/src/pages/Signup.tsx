import { Card, Flex, Typography, Form, Input } from "antd";

interface RegisterInfo {
  name: string;
}

const Signup = () => {
  const handleRegister = (values: RegisterInfo) => {
    console.log(values);
  };

  return (
    <Card className="form-container">
      <Flex>
        {/* form */}
        <Flex>
          <Typography.Title level={3} className="title">
            Crear una cuenta
          </Typography.Title>
          <Typography.Text type="secondary" className="slogan">
            Permitete ser feliz
          </Typography.Text>

          <Form layout="vertical" onFinish={handleRegister} autoComplete="off">
            <Form.Item
              label="ID"
              name="id"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa tu ID",
                },
              ]}
            >
              <Input placeholder="ID" />
            </Form.Item>

            <Form.Item
              label="Nombre completo"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa tu nombre",
                },
              ]}
            >
              <Input placeholder="Nombre completo" />
            </Form.Item>

            <Form.Item
              label="Edad"
              name="age"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa tu edad",
                },
              ]}
            >
              <Input placeholder="Edad" />
            </Form.Item>

            <Form.Item
              label="Género"
              name="gender"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa tu género",
                },
              ]}
            >
              <Input placeholder="Género" />
            </Form.Item>

            <Form.Item
              label="Estado civil"
              name="maritalStatus"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa tu estado civil",
                },
              ]}
            >
              <Input placeholder="Estado civil" />
            </Form.Item>

            <Form.Item
              label="Ocupación"
              name="occupation"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa tu ocupación",
                },
              ]}
            >
              <Input placeholder="Ocupación" />
            </Form.Item>

            <Form.Item
              label="Nivel de educación"
              name="educationLevel"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa tu nivel de educación",
                },
              ]}
            >
              <Input placeholder="Nivel de educación" />
            </Form.Item>

            <Form.Item
              label="Diagnóstico previo"
              name="previousDiagnosis"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa tu diagnóstico previo",
                },
              ]}
            >
              <Input placeholder="Diagnóstico previo" />
            </Form.Item>

            <Form.Item
              label="Medicación"
              name="medication"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa tu medicación",
                },
              ]}
            >
              <Input placeholder="Medicación" />
            </Form.Item>

            <Form.Item
              label="Correo electrónico"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa tu correo electrónico",
                  type: "email",
                },
              ]}
            >
              <Input placeholder="Correo electrónico" />
            </Form.Item>

            <Form.Item
              label="Contraseña"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa tu contraseña",
                },
              ]}
            >
              <Input.Password placeholder="Contraseña" />
            </Form.Item>

            <Form.Item
              label="Confirmar contraseña"
              name="confirmPassword"
              rules={[
                {
                  required: true,
                  message: "Por favor confirma tu contraseña",
                },
              ]}
            >
              <Input.Password placeholder="Confirmar contraseña" />
            </Form.Item>
          </Form>
        </Flex>
      </Flex>
    </Card>
  );
};

export default Signup;
