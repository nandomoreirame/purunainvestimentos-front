<template>
  <div>
    <p-page-header
      :title="`Termos <br /> de uso`"
      :image="`${require('@/assets/images/iStock-1072035844.jpg')}`"
    />

    <b-container>
      <b-row>
        <b-col col md="9" offset-md="2">
          <h3>Termos e Condições de Uso</h3>
          <p>Ao acessar e utilizar este website e/ou quaisquer de suas páginas, o usuário terá aceitado automaticamente todos os Termos e Condições de Uso aqui estabelecidos.</p>
          <p>O usuário fica ciente que a Purunã Investimentos procura manter os materiais e informações contidos neste website atualizados, precisos e completos. No entanto devido à dinâmica das fontes de disponibilização das informações, não garantimos que o conteúdo, os instrumentos e os materiais contidos, utilizados e oferecidos neste website estejam precisamente atualizados ou completos, e não nos responsabilizamos por danos causados por eventuais imprecisões, omissões, erros de conteúdo ou falhas decorres das informações disponibilizadas antes da interpretação das publicações.</p>
          <p>O usuário fica ciente e concorda que não haverá responsabilização da Purunã Investimentos, expressa ou tácita, pelo uso indevido do usuário de informações, instrumentos, materiais disponibilizados e/ou equipamentos utilizados por este website, para quaisquer que sejam os fins, sendo de inteira responsabilidade do mesmo eventuais lesões a direito próprio ou de terceiros, causadas ou não por esse uso inadequado.</p>
          <p>O usuário fica ciente e concorda que em nenhuma circunstância, integrantes ou colaboradores da Purunã Investimentos serão responsáveis por quaisquer danos diretos ou indiretos, especiais, incidentais ou de consequência, perdas ou despesas oriundos da conexão com este website, do uso ou incapacidade de uso por qualquer parte, ou com relação a qualquer falha de desempenho, erro, omissão, interrupção, defeito ou demora na operação ou transmissão, vírus de computador ou falha da linha ou do sistema, mesmo que seus representantes tenham sido avisados da possibilidade de tais danos, perdas ou despesas.</p>
          <p>O adequado provimento de todos os recursos da Internet, sem exceção, é de inteira responsabilidade do usuário do website.</p>
          <p>O usuário fica ciente e concorda que a Purunã Investimentos não tem responsabilidade pelo conteúdo de outros websites: (a) cujos endereços estejam disponíveis nas páginas deste website ou (b) cujo endereço deste website esteja neles disponível. Da mesma forma, não garante o ressarcimento de quaisquer perdas e danos causados pelos websites nesse item referidos.</p>
          <p>Direitos de Autor e Propriedade Intelectual – Salvo disposição em contrário, todo o conteúdo das páginas deste website, tais como informações, materiais, instrumentos, organização da página, gráficos, fotografias e imagens (“Material”), pertence à Purunã Investimentos ou a terceiros que licitamente cederam seu direito de uso, de tal forma que estamos autorizados a utilizar esse Material como parte deste website.</p>
          <p>A reprodução dos conteúdos descritos anteriormente está proibida, salvo mediante prévia autorização por escrito da Purunã Investimentos, com exceção de materiais e informações que sejam públicas por natureza.</p>
          <p>A utilização do material e das informações disponibilizadas neste website e suas páginas são para uso exclusivamente pessoal e não comercial e em nenhuma hipótese o usuário adquirirá qualquer direito sobre este.</p>
          <p>Modificações destes Termos e Condições de Uso – Reservamo-nos o direito de modificar de forma unilateral, sem aviso prévio e a qualquer momento, os presentes Termos e Condições de Uso.</p>
          <p>Lei Aplicável e Jurisdição – Os Termos e Condições de Uso regem-se pelas normas legais e regulamentares da República Federativa do Brasil e fica eleito o Foro Central da Comarca de Curitiba para dirimir quaisquer questões decorrentes da utilização da Purunã Investimentos.</p></p>
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
