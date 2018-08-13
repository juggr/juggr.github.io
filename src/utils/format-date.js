import moment from "moment"

import "moment/locale/de"

moment.locale("de")

const formatDate = date => moment(date).format("LL")

export default formatDate