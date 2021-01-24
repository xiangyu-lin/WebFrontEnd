<template>
  <div>
    <h3 :style="{ marginBottom: '16px' }">
      Default Size
    </h3>
    <a-list bordered :data-source="data">
      <a-list-item slot="renderItem" slot-scope="item">
        {{ item }}
      </a-list-item>
      <div slot="header">
        Header
      </div>
      <div slot="footer">
        Footer
      </div>
    </a-list>
    <h3 :style="{ margin: '16px 0' }">
      Small Size
    </h3>
    <a-list size="small" bordered :data-source="data">
      <a-list-item slot="renderItem" slot-scope="item">
        {{ item }}
      </a-list-item>
      <div slot="header">
        Header
      </div>
      <div slot="footer">
        Footer
      </div>
    </a-list>
    <h3 :style="{ margin: '16px 0' }">
      Large Size
    </h3>
    <a-list size="large" bordered :data-source="data">
      <a-list-item slot="renderItem" slot-scope="item">
        {{ item }}
      </a-list-item>
      <div slot="header">
        Header
      </div>
      <div slot="footer">
        Footer
      </div>
    </a-list>
  </div>
</template>
<script>
const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

export default {
  data() {
    return {
      data,
    };
  },
};
</script>
<style></style>
