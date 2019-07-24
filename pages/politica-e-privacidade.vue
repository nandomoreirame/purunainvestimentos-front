<template>
  <div>
    <p-page-header
      title="Política e privacidade"
      :image="`${require('@/assets/images/iStock-939030682.jpg')}`"
    />

    <b-container>
      <b-row>
        <b-col col md="9" offset-md="2">
          <h3>Política e Privacidade</h3>

          <p>O Site purunainvestimentos.com.br sabe o quanto sua segurança e sua privacidade são importantes e se preocupa muito com isso. Para garantir a sua tranquilidade, divulgamos uma série de normas que todo usuário deve seguir e os compromissos que a Purunã Investimentos estabelece para garantir sua privacidade:</p>
          <ul>
            <li>
              Não divulgar sem prévia autorização, em hipótese alguma, o e-mail do internauta que se cadastrar em páginas que requerem preenchimento de dados pessoais – tais como páginas de Cartões Postais, Fórum, Amigos Virtuais, Lista Pública de E-mail e outros serviços.
            </li>
            <li>Não revelar sem prévia autorização, em hipótese alguma, o e-mail do internauta a outras empresas.</li>
            <li>Não enviar mensagens ao correio eletrônico do internauta, sem que o mesmo tenha solicitado.</li>
            <li>
              Possibilitar ao internauta o cancelamento, a qualquer momento, do envio de material informativo por e-mail solicitado anteriormente.
            </li>
            <li>
              Preservar a identidade do internauta, mantendo sigilo enquanto o mesmo navega nas páginas do Site Purunã Investimentos. Para tal, o usuário deve se comprometer a respeitar as normas de segurança acima, assim como as normas específicas de cada serviço.
            </li>
            <li>Utilizar os cookies (informações enviadas pelo servidor do Site Purunã Investimentos ao computador do usuário, para identificá-lo) apenas para controle interno de audiência e de navegação e nunca para controlar preferências do internauta, salvo quando este desrespeitar alguma das normas de segurança listadas acima ou específicas de cada serviço. Você não precisa aceitar os cookies.</li>
            <li>Garantir segurança e privacidade de identidade aos internautas que navegam no Site Purunã Investimentos. Dados cadastrados – como nome, endereço – são enviados e mantidos em sigilo em servidores de segurança do Site Purunã Investimentos.</li>
          </ul>

          <h3>O que não se deve fazer ao usar os serviços do Site Purunã Investimentos?</h3>
          <ul>
            <li>Qualquer uso com propósitos ilegais.</li>
            <li>Transmitir ou divulgar ameaças, pornografia infantil, material racista ou qualquer outro que viole a legislação em vigor no país.</li>
            <li>Propagar vírus de computador, programas invasivos (worms) ou outras formas de programas de computador, auto-replicantes ou não, que causem danos permanentes ou temporários nos equipamentos do destinatário.</li>
            <li>Transmitir tipos ou quantidades de dados que causem falhas em serviços ou equipamentos na rede do Site Purunã Investimentos ou na Internet.</li>
            <li>Usar a rede para tentar e/ou realizar acesso não autorizado a dispositivos de comunicação, informação ou computação.</li>
            <li>Forjar endereços de máquinas, de rede ou de correio eletrônico, na tentativa de responsabilizar terceiros ou ocultar a identidade ou autoria.</li>
            <li>Destruir ou corromper dados e informações de outros usuários.</li>
            <li>Violar a privacidade de outros usuários.</li>
            <li>Distribuir, via correio eletrônico, grupos de discussão, fóruns e formas similares de comunicação mensagens não solicitadas do tipo ‘corrente’ e mensagens em massa, comerciais ou não.</li>
            <li>Enviar grande quantidade de mensagens idênticas ao mesmo destinatário por correio eletrônico (mail bombing).</li>
            <li>Violar copyright ou direito autoral alheio reproduzindo material sem prévia autorização do Site Agência.</li>
          </ul>

          <h3>O que acontece a quem desobedece a uma dessas normas?</h3>

          <ul>
            <li>O usuário será responsabilizado e poderá responder civil e criminalmente, ou ambos, conforme o caso.</li>
            <li>Pode receber advertências ou, até mesmo, ter o bloqueio no acesso ao site.</li>
            <li>Se houver identificação de pornografia infantil ou outros crimes previstos em lei, as mesmas poderão ser comunicadas à autoridade competente.</li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  components: {
    PPageHeader: () => import('~/components/PageHeader.vue')
  }
}
</script>

<style lang="scss" scoped>
p, li {
  font-size: 14px;
  line-height: 1.79;
  color: #4a4a4a;
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0 0 0 25px;
  margin: 0;
}

li {
  &::before {
    display: inline-block;
    content: ' • ';
    margin-right: 15px;
  }
}
</style>
