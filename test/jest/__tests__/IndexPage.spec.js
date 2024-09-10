import IndexPage from 'src/pages/IndexPage.vue'
import { shallowMount } from '@vue/test-utils'

// describe('IndexPage', () => {
//   it('should render correct contents', () => {
//     const wrapper = shallowMount(IndexPage)
//     let header = wrapper.find('.htmlClass h1')
//     expect(header.exists()).toBe(true)
//     expect(header.text()).toBe('รักฉันมั้ย')
//   })
//   it('ตรวจสอบตัวแปรชื่อว่า title', () => {
//     const wrapper = shallowMount(IndexPage, {
//       data () {
//         return {
//           title: 'รักฉันมั้ย'
//         }

//       }
//     }
//   )
//     let header = wrapper.find('.htmlClass h1')
//     expect(header.text()).toBe('รักฉันมั้ย')
//   })
// })

  // test('ทดสอบว่ามีฟอร์ม (from)', () => {
  //   const wrapper = shallowMount(IndexPage)
  //   expect(wrapper.find('form').exists()).toBe(true)
  // })

  // test('ทดสอบว่าในฟอร์ม (from) มีการรับค่า (input)', () => {
  //   const wrapper = shallowMount(IndexPage)
  //   expect(wrapper.find('form > input').exists()).toBe(true)
  // })


  // test('ทดสอบว่ามีปุ่ม (button)', () => {
  //   const wrapper = shallowMount(IndexPage)
  //   expect(wrapper.find('button').exists()).toBe(true)
  // })

  // test('ทดสอบว่าในฟอร์ม (from) มีรหัสนักศึกษา', () => {
  //   const wrapper = shallowMount(IndexPage)
  //   let Divtest = wrapper.find('.htmlClass div')
  //   expect(Divtest.text()).toBe('6604101366')
  // })

  it('ตรวจสอบตัวแปร codestudent', () => {
    const wrapper = shallowMount(IndexPage, {
      data () {
        return {
          codestudent: '6604101366'
        }
      }
    })
    let divtest = wrapper.find('.htmlClass div')
    expect(divtest.text()).toBe('6604101366')
  })

  it('ตรวจสอบตัวแปร firstName', () => {
    const wrapper = shallowMount(IndexPage, {
      data () {
        return {
          firstName: 'Phanuson'
        }
      }
    })
    let p1test = wrapper.find('.htmlClass p1')
    expect(p1test.text()).toBe('Phanuson')
  })

  it('ตรวจสอบตัวแปร lastName', () => {
    const wrapper = shallowMount(IndexPage, {
      data () {
        return {
          lastName: 'Khamkhokkuad'
        }
      }
    })
    let p2test = wrapper.find('.htmlClass p2')
    expect(p2test.text()).toBe('Khamkhokkuad')
  })

  it('ตรวจสอบตัวแปร nickName', () => {
    const wrapper = shallowMount(IndexPage, {
      data () {
        return {
          nickName: 'Boss'
        }
      }
    })
    let p3test = wrapper.find('.htmlClass p3')
    expect(p3test.text()).toBe('Boss')
  })
