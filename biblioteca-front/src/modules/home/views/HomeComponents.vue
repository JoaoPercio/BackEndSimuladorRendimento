<template>
  <div>
    <div class="m--lg">
      <div>Buttons</div>
      <hr />

      <biblioteca-row class="my--lg">
        <biblioteca-button>Default</biblioteca-button>
        <biblioteca-button theme="primary">Primary</biblioteca-button>
        <biblioteca-button theme="success">Success</biblioteca-button>
        <biblioteca-button theme="info">Info</biblioteca-button>
        <biblioteca-button theme="warning">Warning</biblioteca-button>
        <biblioteca-button theme="danger">Danger</biblioteca-button>
      </biblioteca-row>

      <biblioteca-row class="my--lg">
        <biblioteca-button disabled>Default</biblioteca-button>
        <biblioteca-button theme="primary" disabled>Primary</biblioteca-button>
        <biblioteca-button theme="success" disabled>Success</biblioteca-button>
        <biblioteca-button theme="info" disabled>Info</biblioteca-button>
        <biblioteca-button theme="warning" disabled>Warning</biblioteca-button>
        <biblioteca-button theme="danger" disabled>Danger</biblioteca-button>
      </biblioteca-row>

      <biblioteca-row class="mb--lg">
        <biblioteca-button plain>Default</biblioteca-button>
        <biblioteca-button theme="primary" plain>Primary</biblioteca-button>
        <biblioteca-button theme="success" plain>Success</biblioteca-button>
        <biblioteca-button theme="info" plain>Info</biblioteca-button>
        <biblioteca-button theme="warning" plain>Warning</biblioteca-button>
        <biblioteca-button theme="danger" plain>Danger</biblioteca-button>
      </biblioteca-row>

      <biblioteca-row class="mb--lg">
        <biblioteca-button plain disabled>Default</biblioteca-button>
        <biblioteca-button theme="primary" plain disabled>Primary</biblioteca-button>
        <biblioteca-button theme="success" plain disabled>Success</biblioteca-button>
        <biblioteca-button theme="info" plain disabled>Info</biblioteca-button>
        <biblioteca-button theme="warning" plain disabled>Warning</biblioteca-button>
        <biblioteca-button theme="danger" plain disabled>Danger</biblioteca-button>
      </biblioteca-row>

      <biblioteca-row class="mb--lg">
        <biblioteca-button icon="search"></biblioteca-button>
        <biblioteca-button theme="primary" icon="pencil"></biblioteca-button>
        <biblioteca-button theme="success" icon="check-lg"></biblioteca-button>
        <biblioteca-button theme="info" icon="book"></biblioteca-button>
        <biblioteca-button theme="warning" icon="chat"></biblioteca-button>
        <biblioteca-button theme="danger" icon="eraser"></biblioteca-button>
      </biblioteca-row>
    </div>
    <div class="m--lg">
      <div>Header</div>
      <hr />

      <biblioteca-row class="my--lg">
        <biblioteca-header size="sm">Meu título</biblioteca-header>
        <biblioteca-header size="md">Meu título</biblioteca-header>
        <biblioteca-header size="lg">Meu título</biblioteca-header>
      </biblioteca-row>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DashboardPage',
};
</script>
