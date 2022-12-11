import axios from 'axios'
import { MAIN_API } from '@/const'
import dnk from '@/assets/dnk.jpg'
import dog from '@/assets/dog.jpg'
import med from '@/assets/med.jpg'
import mobile from '@/assets/mobile.jpg'
import veter from '@/assets/veter.jpg'
import ximia from '@/assets/ximia.jpg'

export default {
  namespaced: true,
  state: {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcwNjcxOTk0LCJqdGkiOiJlNjFhMjgxMjlkNWE0ZjE0OWQxYTFhYWIyM2M3MjUxYiIsInVzZXJfaWQiOjN9.WO1xRfMVOv6MfXv5eqayc3KpxPZsDoxl7OMBPdN_hKw',
    role: 'hr',
    items: [
      {
        id: 0,
        url: dnk,
        text: 'Deeploid',
        company: 'Генотек',
        money: '1.2 млн р.',
        data: 'Сертябрь 2024',
        description: 'Около половины доходов «Генотеку» приносят исследования для научных лабораторий – например, компания изучала новые штаммы микроорганизмов, в частности туберкулеза, а также геном десятков онкологических пациентов, с анализом их опухолей и здоровых клеток. Обращаются в «Генотек» и археологи – для ДНК-анализа найденных останков.  Средняя стоимость таких исследований – сотни тысяч рублей. Создатели проекта экспериментируют и сами – например, разрабатывают методы генотипирования для определения породы собак, но пока не встретили энтузиазма у заводчиков.',
        amount: 3453
      },
      {
        id: 1,
        url: dog,
        text: 'SimpPet',
        company: 'TEDDY FOOD',
        money: '5.0 млн р.',
        data: 'Январь 2025',
        description: 'TEDDY FOOD — это онлайн-платформа для помощи бездомным животным. Она устроена так: человек заходит к нам на сайт и выбирает питомца, за которым будет наблюдать через видеокамеры, установленные в вольерах. Можно купить питомцу корм или услуги по дополнительному уходу — за такие активности пользователи получают звания и баллы. Также животных можно навестить в приюте или забрать домой насовсем.',
        amount: 9781
      },
      {
        id: 2,
        url: veter,
        text: 'Energy AI',
        company: 'L-Charge',
        money: '0.5 млн р.',
        data: 'Июнь 2023',
        description: 'Компания L-Charge была создана в 2020 году, а летом 2021 года презентовала технологию сверхбыстрой зарядки. В ее основе — мини-электростанция на сжиженном природном газе, при этом уже сейчас в ней предусмотрен вариант перехода на водород.',
        amount: 1423
      },
      {
        id: 3,
        url: med,
        text: 'Artificial Crystal',
        company: 'Welltory',
        money: '1.4 млн р.',
        data: 'Сертябрь 2023',
        description: 'Пользователю нужно каждое утро прикладывать палец к камере смартфона на две минуты. Так сервис измеряет амплитуду сердечного ритма, чтобы затем проанализировать данные и показать инфографику с результатами. Работа сердца управляется двумя отделами вегетативной нервной системы: симпатическим и парасимпатическим. Во время стресса активнее работает симпатическая система — она запускает выработку норадреналина. Из-за этого сердце бьется быстрее. Парасимпатическая система замедляет сердечный ритм.',
        amount: 754
      },
      {
        id: 4,
        url: mobile,
        text: 'GLUOM',
        company: 'Revolut',
        money: '1.5 млн р.',
        data: 'Сертябрь 2023',
        description: 'Использование «умных» шаблонов вместо Ворда ускоряет подготовку сложных документов на несколько десятков страниц А4, а также упрощает ежедневную подготовку трех-четырех документов с десятком страниц.',
        amount: 6431
      },
      {
        id: 5,
        url: ximia,
        text: 'Med Data',
        company: 'Paithology',
        money: '3.0 млн р.',
        data: 'Сертябрь 2023',
        description: 'Программа с помощью нейросетей классифицирует процессы по морфологической картине в гистологическом, цитологическом, иммуногистохимическом или цитогенетическом микропрепарате.',
        amount: 1322
      },
      {
        id: 6,
        url: 'https://phonoteka.org/uploads/posts/2021-07/1625517350_6-phonoteka-org-p-robototekhnika-zastavka-krasivie-zastavki-6.jpg',
        description: 'Искусственный интеллект принимает разные формы и часто находит своё воплощение в строчках кода, которые управляют сложными машинами и программами deep learning. Чаще всего угрозу со стороны искусственного интеллекта люди представляют в виде гуманоидных машин, то есть роботов, которые используют свою силу, чтобы поработить своих создателей.',
        text: 'Genetic intelligence',
        company: 'ООО “Нанотехнологии”',
        money: '15.0 млн р.',
        data: 'Октябрь 2025',
        amount: 23354
      }
    ]
  },
  mutations: {
    logout (state) {
      state.token = ''
    }
  },
  actions: {
    getToken (context, info) {
      axios.post(`${MAIN_API}/auth/users`, {
        email: info.email,
        is_student: true,
        username: info.email,
        password: info.password,
        re_password: info.password
      })
        .then(() => {
          context.commit()
        })
    }
  }
}
