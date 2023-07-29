import Link from 'next/link';
import styles from './UserCard.module.css';
import Image from 'next/image'

interface Props {
  id: string;
  name: string | null;
  age: number | null;
  image: string | null;
}

export default function UserCard({ id, name, age, image }: Props) {
  return (
    <div className={styles.card}>
      <Image
        src={image ?? '/defaultUser.png'}
        alt={`${name}'s profile`}
        className={styles.cardImage}
        width={1080}
        height={1080}
      />
      <div className={styles.cardContent}>
        <h3>
          <Link href={`/users/${id}`}>{name}</Link>
        </h3>
        <p>Age: {age}</p>
      </div>
    </div>
  );
}