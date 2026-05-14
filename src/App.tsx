const BASE_URL = "https://firmas.zeabur.app";
const SIGNATURE_IMAGE_URL = `${BASE_URL}/firma1.jpeg`;

export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "2rem", maxWidth: 700 }}>
      <h2>Preview — Firma corporativa</h2>
      <p style={{ color: "#666", fontSize: "0.85rem" }}>
        Copia el bloque HTML de abajo en tu cliente de correo (Gmail → Configuración → Firma).
      </p>

      <hr />

      <h3>Vista previa</h3>
      <SignaturePreview imageUrl={SIGNATURE_IMAGE_URL} />

      <hr />

      <h3>HTML para copiar</h3>
      <pre
        style={{
          background: "#f4f4f4",
          padding: "1rem",
          fontSize: "0.78rem",
          overflowX: "auto",
          borderRadius: 6,
          userSelect: "all",
        }}
      >
        {signatureHtml(SIGNATURE_IMAGE_URL)}
      </pre>
    </div>
  );
}

function SignaturePreview({ imageUrl }: { imageUrl: string }) {
  return (
    <div style={{ margin: "1rem 0", border: "1px solid #ddd", padding: "1rem", borderRadius: 6 }}>
      <img
        src={imageUrl}
        alt="Firma corporativa"
        width={700}
        style={{ display: "block", maxWidth: "100%" }}
      />
    </div>
  );
}

function signatureHtml(imageUrl: string) {
  return `<img src="${imageUrl}" alt="Firma corporativa" width="700" style="display:block;max-width:700px;" />`;
}
