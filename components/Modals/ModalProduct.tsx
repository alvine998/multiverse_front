import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Input from '../Input/Input';

function ModalProduct(props: any) {
    return (
        <Modal
            show={props?.toggle}
            onHide={() => { props?.setToggle(!props?.toggle) }}
            animation
        >
            <Modal.Header closeButton>
                <Modal.Title>{props?.keys == 'create' ? 'Tambah Produk' : props?.keys == 'update' ? 'Ubah Produk' : 'Hapus Produk'}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {
                    props?.keys == 'delete' ? <>
                        <p>Anda yakin ingin menghapus data produk ini?</p>
                    </> : <>
                        <Input label='Nama Produk' placeholder='Masukkan nama produk' required />
                        <Input label='Kategori' placeholder='Masukkan kategori' required />
                        <Input label='Harga' placeholder='Masukkan harga' type={'number'} required />
                        <Input label='Stok' placeholder='Masukkan stok' type={'number'} required />
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

export default ModalProduct;