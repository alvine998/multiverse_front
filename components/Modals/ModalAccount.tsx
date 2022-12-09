import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Input from '../Input/Input';

function ModalAccount(props: any) {
  return (
    <Modal
      show={props?.toggle}
      onHide={() => { props?.setToggle(!props?.toggle) }}
      animation
    >
      <Modal.Header closeButton>
        <Modal.Title>{props?.keys == 'create' ? 'Tambah Akun Pengguna' : props?.keys == 'update' ? 'Ubah Akun Pengguna' : 'Hapus Akun Pengguna'}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {
          props?.keys == 'delete' ? <>
            <p>Anda yakin ingin menghapus akun ini?</p>
          </> : <>
            <Input label='Nama Lengkap' placeholder='Masukkan nama lengkap' required />
            <Input label='Email' placeholder='Masukkan email' type={'email'} required />
            <Input label='No Hp' placeholder='Masukkan no hp' required />
            <Input label='Password' placeholder='********' required type={'password'} />
          </>
        }
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={() => props?.setToggle(!props?.toggle)}>Kembali</Button>
        {
          props?.keys == 'delete' ? <>
            <Button variant="danger">Hapus</Button>
          </> : <>
            <Button variant="primary">Simpan</Button>
          </>
        }
      </Modal.Footer>
    </Modal>
  );
}

export default ModalAccount;