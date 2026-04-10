export default function Chat() {
  return (
    <div className="ready-chatting-option tmp-ready-chat">
      <input type="checkbox" id="click" />
      <label htmlFor="click">
        <i className="fab fa-facebook-messenger" />
        <i className="fas fa-times" />
      </label>
      <div className="wrapper">
        <div className="head-text">Vamos conversar? - Online</div>
        <div className="chat-box">
          <div className="desc-text">
            Preencha o formulário para iniciar a conversa.
          </div>
          <form
            className="tmp-dynamic-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="field">
              <input
                className="input-field"
                name="name"
                placeholder="Seu nome"
                type="text"
                required
              />
            </div>
            <div className="field">
              <input
                className="input-field"
                name="email"
                placeholder="Seu e-mail"
                type="email"
                required
              />
            </div>
            <div className="field textarea">
              <textarea
                className="input-field"
                placeholder="Sua mensagem"
                name="message"
                required
                defaultValue={""}
              />
            </div>
            <div className="field">
              <button name="submit" type="submit">
                Enviar mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
