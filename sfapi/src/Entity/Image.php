<?php

namespace App\Entity;

use App\Repository\ImageRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;


/**
 * @apiResource(
 *      normalizationContext={"groups"={"image:read"}},
 *      denormalizationContext={"groups"={"image:write"}}
 * )
 *
 * @ORM\Entity(repositoryClass=ImageRepository::class)
 */
class Image
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @Groups({"image:read","image:write"})
     * @ORM\ManyToOne(targetEntity=Boat::class, inversedBy="images")
     */
    private $id_boat;

    /**
     * @Groups({"image:read", "image:write"})
     * @ORM\Column(type="text", nullable=true)
     */
    private $description;

    /**
     * @Groups({"image:read", "image:write"})
     * @ORM\Column(type="string", length=255, nullable=false)
     */
    private $image;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIdBoat(): ?Boat
    {
        return $this->id_boat;
    }

    public function setId_Boat(?Boat $id_boat): self
    {
        $this->id_boat = $id_boat;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getImage()
    {
        return $this->image;
    }

    public function setImage($image): self
    {
        $this->image = $image;

        return $this;
    }
}
