import Image from 'next/image'
import { X } from 'phosphor-react'

import googleLogo from '../../assets/googleLogo.svg'
import githubLogo from '../../assets/githubLogo.svg'

import {
  CommentsContainer,
  CommentsContent,
  Container,
  ModalContent,
  ScrollView,
} from './styles'
import { useState } from 'react'
import { BookModalCard } from '../BookModalCard'
import { CommentsCard } from '../CommentsCard'
import { Comment } from '../Comment'

interface BookModalProps {
  isOpen: boolean
  handleClose: () => void
}

export function BookModal({ isOpen = true, handleClose }: BookModalProps) {
  const [openComment, setOpenComment] = useState(false)

  return (
    <Container isOpen={isOpen}>
      <ModalContent>
        <ScrollView>
          <header>
            <button onClick={handleClose}>
              <X size={24} />
            </button>
          </header>
          <BookModalCard />

          <CommentsContainer>
            <div>
              <span>Avaliações</span>
              <button onClick={() => setOpenComment(true)}>Avaliar</button>
            </div>

            {openComment && (
              <Comment closeComment={() => setOpenComment(false)} />
            )}

            <CommentsContent>
              <CommentsCard />
              <CommentsCard />
              <CommentsCard />
            </CommentsContent>
          </CommentsContainer>
        </ScrollView>
      </ModalContent>
    </Container>
  )
}
