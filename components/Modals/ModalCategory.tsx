import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Input from '../Input/Input';

function ModalCategory(props: any) {
    return (
        <Modal
            show={props?.toggle}
            onHide={() => { props?.setToggle(!props?.toggle) }}
            animation
        >
            <Modal.Header closeButton>
                <Modal.Title>{props?.keys == 'create' ? 'Tambah Kategori' : props?.keys == 'update' ? 'Ubah Kategori' : 'Hapus Kategori'}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {
                    props?.keys == 'delete' ? <>
                        <p>Anda yakin ingin menghapus data kategori ini?</p>
                    </> : <>
                        <Input label='Nama Kategori' placeholder='Masukkan nama kategori' required />
                        <Input label='Keterangan' placeholder='Masukkan keterangan' />
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

export default ModalCategory;