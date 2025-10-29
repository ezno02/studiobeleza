import React from 'react'

const Contact = () => {
    return (
        <section id='contact'>
            <div className="box">
                <div className="container">
                    <fieldset>
                        <h2>Contato</h2>
                        <div className="input__div">
                            <label htmlFor="name">Nome</label>
                            <input type="text" name="name" id="" placeholder='Digite seu nome aqui' />
                        </div>
                        <div className="input__div">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="" placeholder='exemplo@email.com' />
                        </div>
                        <div className="input__div">
                            <label htmlFor="message">Mensagem</label>
                            <textarea name="message" id="" placeholder='Digite aqui sua mensagem'></textarea>
                        </div>
                        <div className="button__div">
                            <button>Enviar</button>
                        </div>
                    </fieldset>
                </div>
            </div>
        </section>
    )
}

export default Contact