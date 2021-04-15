const dateMask = data => {
    data = data.replace(/\D/g,"")
    data = data.replace(/(\d{2})(\d)/,"$1-$2")
    data = data.replace(/(\d{2})(\d)/,"$1-$2")
    data = data.slice(0,10)
    return data
}

const phoneMask = phone =>{
    phone = phone.replace(/\D/g,"")
    phone = phone.replace(/(\d{2})(\d)/,"($1)$2")
    phone = phone.replace(/(\d{5})(\d)/,"$1-$2")
    phone = phone.slice(0,14)

    return phone
}

const cpfMask = value => (
    value
      .replace(/\D/g, '') 
      .replace(/(\d{3})(\d)/, '$1.$2') 
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1') 
)

const RGmask = rg => (
    rg
        .replace(/\D/g, '')
        .slice(0,8)
)

export { dateMask, phoneMask, cpfMask, RGmask }