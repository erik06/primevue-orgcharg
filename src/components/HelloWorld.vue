<template>
  <div>
    <div class="card">
      <OrganizationChart :value="data2">
        <template #default="slotProps">
          <span>{{ slotProps.node.data.label }}</span>
        </template>
      </OrganizationChart>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data2: {
        key: '0',
        data: { label: 'F.C. Barcelona' },
        children: [
          {
            key: '0_0',
            data: { label: 'F.C. Barcelona' },
            children: [
              {
                key: '0_0_0',
                data: { label: 'Chelsea F.C.' },
              },
              {
                key: '0_0_1',
                data: { label: 'F.C. Barcelona' },
              },
              {
                key: '0_0_1',
                data: { label: 'F.C. Barcelona' },
                children: [
                  {
                    key: '0_0_0',
                    data: { label: 'Chelsea F.C.' },
                  },
                  {
                    key: '0_0_1',
                    data: { label: 'F.C. Barcelona' },
                  },
                  {
                    key: '0_0_1',
                    data: { label: 'F.C. Barcelona' },
                  },
                ],
              },
            ],
          },
          {
            key: '0_1',
            data: { label: 'Real Madrid' },
            children: [
              {
                key: '0_1_0',
                data: { label: 'Bayern Munich' },
              },
              {
                key: '0_1_1',
                data: { label: 'Real Madrid' },
              },
            ],
          },
        ],
      },
    };
  },
};
</script>

<style scoped lang="scss">
::v-deep(.p-organizationchart) {
  .p-person {
    padding: 0;
    border: 0 none;
  }

  .node-header,
  .node-content {
    padding: 0.5em 0.7rem;
  }

  .node-header {
    background-color: #495ebb;
    color: #ffffff;
  }

  .node-content {
    text-align: center;
    border: 1px solid #495ebb;
  }

  .node-content img {
    border-radius: 50%;
  }

  .department-cfo {
    background-color: #7247bc;
    color: #ffffff;
  }

  .department-coo {
    background-color: #a534b6;
    color: #ffffff;
  }

  .department-cto {
    background-color: #e9286f;
    color: #ffffff;
  }
}
</style>
