<?php
namespace App\Models;

use CodeIgniter\Model;

class LaguModel extends Model{
    protected $table = "lagu";
    protected $primaryKey = "id";
    protected $allowedFields = [
        "judul","lirik","penyanyi"
    ];
    protected $returnType = "App\Entities\Lagu";
    protected $useTimestamps = false;

    public function getAllArtist($limit, $offset)
    {
        $builder = $this->builder();
        $builder->select('penyanyi');
        $builder->distinct();
        $builder->orderBy('penyanyi', 'ASC');
        $builder->limit($limit, $offset);
        $data = $builder->get();
        if($data)
        {
            return $data->getResult();
        }
        return false;
    }
    public function countArtist()
    {
        $builder = $this->builder();
        $builder->select('penyanyi');
        $builder->distinct();
        $count = $builder->countAllResults();
        if($count)
        {
            return $count;
        }
    }

    public function getArtistsByAbjad($abjad, $limit, $offset)
    {
        $builder = $this->builder();
        $builder->select('penyanyi');
        $builder->like('penyanyi', $abjad, 'after');
        $builder->distinct();
        $builder->orderBy('penyanyi', 'ASC');
        $builder->limit($limit, $offset);
        $data = $builder->get();
        if($data)
        {
            return $data->getResult();
        }
        return false;
    }

    public function countArtistsByAbjad($abjad)
    {
        $builder = $this->builder();
        $builder->select('penyanyi');
        $builder->like('penyanyi', $abjad, 'after');
        $builder->distinct();
        $count = $builder->countAllResults();
        if($count)
        {
            return $count;
        }
        return false;
    }
}