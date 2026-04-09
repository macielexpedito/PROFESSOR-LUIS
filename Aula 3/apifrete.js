const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const TOKEN = "SEU_TOKEN_AQUI";

app.post("/calcular-frete", async (req, res) => {
  try {
    const response = await axios.post(
      "https://api.melhorenvio.com.br/v2/me/shipment/calculate",
      {
        from: {
          postal_code: "06454000" // CEP de origem
        },
        to: {
          postal_code: req.body.cep // CEP do cliente
        },
        products: [
            {
                id: "Jogos Retrogames",
                width: 25,
                height: 30,
                length: 35,
                weight: 3,
                insurance_value: 650,
                quantity: 1
            }
]
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao calcular frete" });
  }
});

app.listen(3000, () => console.log("API rodando na porta 3000"));