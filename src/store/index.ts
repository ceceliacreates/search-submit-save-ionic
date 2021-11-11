import { InjectionKey } from "vue";
import {
  createStore,
  useStore as baseUseStore,
  Store,
  MutationTree,
  ActionTree
} from "vuex";

export interface Item {
  id: number;
  name: string;
  description?: string;
  url?: string;
}

export interface State {
  items: Item[];
  savedResults: Item[];
}

export const key: InjectionKey<Store<State>> = Symbol();

const state: State = {
  items: [
    {
      id: 1,
      name: "Junior Executive",
      description:
        "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      url: "https://angelfire.com/in/felis/donec.aspx"
    },
    {
      id: 2,
      name: "Senior Quality Engineer",
      description:
        "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
      url: "https://gmpg.org/ultrices/mattis/odio/donec.js"
    },
    {
      id: 3,
      name: "Registered Nurse",
      description:
        "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      url:
        "https://barnesandnoble.com/ultrices/posuere/cubilia/curae/mauris/viverra.xml"
    },
    {
      id: 4,
      name: "Marketing Assistant",
      description:
        "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      url:
        "https://nydailynews.com/maecenas/leo/odio/condimentum/id/luctus.aspx"
    },
    {
      id: 5,
      name: "Account Coordinator",
      description:
        "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
      url:
        "https://earthlink.net/posuere/cubilia/curae/nulla/dapibus/dolor.aspx"
    },
    {
      id: 6,
      name: "Software Engineer I",
      description:
        "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      url: "https://wikispaces.com/justo/morbi/ut/odio/cras.aspx"
    },
    {
      id: 7,
      name: "Analog Circuit Design manager",
      description: "Fusce consequat. Nulla nisl. Nunc nisl.",
      url: "http://123-reg.co.uk/integer/ac/neque/duis/bibendum/morbi/non.jpg"
    },
    {
      id: 8,
      name: "Actuary",
      description:
        "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      url: "http://opensource.org/leo/pellentesque/ultrices.png"
    },
    {
      id: 9,
      name: "Director of Sales",
      description:
        "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      url: "http://fema.gov/tincidunt/eget/tempus/vel/pede/morbi.html"
    },
    {
      id: 10,
      name: "Database Administrator II",
      description:
        "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
      url: "http://who.int/rutrum/at.jsp"
    },
    {
      id: 11,
      name: "Structural Engineer",
      description:
        "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      url: "http://theatlantic.com/sit/amet/nunc/viverra.html"
    },
    {
      id: 12,
      name: "Mechanical Systems Engineer",
      description:
        "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      url: "https://home.pl/sodales/sed/tincidunt/eu/felis.html"
    },
    {
      id: 13,
      name: "Editor",
      description:
        "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      url:
        "http://linkedin.com/nullam/porttitor/lacus/at/turpis/donec/posuere.jpg"
    },
    {
      id: 14,
      name: "Chief Design Engineer",
      description:
        "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
      url: "https://wp.com/vitae/consectetuer/eget/rutrum/at/lorem.jpg"
    },
    {
      id: 15,
      name: "Senior Cost Accountant",
      description:
        "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
      url:
        "http://google.ru/leo/maecenas/pulvinar/lobortis/est/phasellus/sit.xml"
    },
    {
      id: 16,
      name: "Health Coach III",
      description:
        "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      url: "https://un.org/eget/massa/tempor/convallis/nulla/neque/libero.jsp"
    },
    {
      id: 17,
      name: "Quality Control Specialist",
      description:
        "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
      url: "http://reverbnation.com/luctus/et/ultrices.json"
    },
    {
      id: 18,
      name: "Account Representative III",
      description:
        "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      url: "https://buzzfeed.com/amet/erat/nulla/tempus/vivamus.png"
    },
    {
      id: 19,
      name: "Account Representative III",
      description:
        "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      url: "https://theatlantic.com/mi/pede/malesuada/in/imperdiet.jsp"
    },
    {
      id: 20,
      name: "Systems Administrator I",
      description:
        "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      url:
        "http://ycombinator.com/integer/pede/justo/lacinia/eget/tincidunt/eget.jpg"
    }
  ],
  savedResults: []
};

export const enum MUTATIONS {
  ADD_SAVED_RESULT = "ADD_SAVED_RESULT",
  DEL_SAVED_RESULT = "DEL_SAVED_RESULT"
}
const mutations: MutationTree<State> = {
  [MUTATIONS.ADD_SAVED_RESULT](state, newSavedResult: Item) {
    state.savedResults.push({ ...newSavedResult });
  },
  [MUTATIONS.DEL_SAVED_RESULT](state, savedResult: Item) {
    state.savedResults.splice(state.savedResults.indexOf(savedResult), 1);
  }
};

export const store = createStore<State>({
  state,
  mutations
});

// our own useStore function for types
export function useStore() {
  return baseUseStore(key);
}
