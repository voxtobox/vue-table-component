import TableView from '../../../src';
import Vue from 'vue/dist/vue.js';

describe('TableView', () => {
    Vue.use(TableView);

    beforeEach(() => {
        document.body.innerHTML = `
            <div id="app">
                <div>
                    <table-view
                        :data="[{ id: 1, firstName: 'Jay', lastName: 'Vleugels' },
                                { id: 2, firstName: 'Wesley', lastName: 'Biets' },
                                { id: 3, firstName: 'Randy', lastName: 'Paret' },
                                { id: 4, firstName: 'Devon', lastName: 'Macharis' }]"
                        sort-by="lastName"
                        sort-order="desc"
                    >
                        <table-column for="firstName" label="First name"></table-column>
                        <table-column for="lastName" label="Last name"></table-column>
                    </table-view>
                </div>
            </div>
        `;
    });

    it('can mount', async () => {
        await createVm();

        expect(document.body.innerHTML).toMatchSnapshot();
    });
});

async function createVm() {
    const vm = new Vue({
        el: '#app',
    });

    await Vue.nextTick(() => {});

    return { app: vm, component: vm.$children[0] };
}
