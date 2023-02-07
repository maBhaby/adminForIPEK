import { FC } from 'react'
import {
  Box,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText
} from '@chakra-ui/react'
import { BASIC_COLOR } from '@/utils/const'

interface IStatisticCard {
  value: string | number | undefined
  label: string
  helpText?: string
}

const StatisticCard: FC<IStatisticCard> = ({
  value,
  label,
  helpText
}) => {
  return (
    <Box w='100%' borderRadius='15px' padding='25px' bg={BASIC_COLOR.WHITE} boxShadow='xl'>
      <Stat>
        <StatLabel fontSize='14'>{label}</StatLabel>
        <StatNumber fontWeight='300' fontSize='30'>{value}</StatNumber>
        {Boolean(helpText) && <StatHelpText>Feb 12 - Feb 28</StatHelpText>}
      </Stat>
    </Box>
  )
}

export default StatisticCard
