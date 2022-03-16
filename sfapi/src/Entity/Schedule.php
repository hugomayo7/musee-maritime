<?php

namespace App\Entity;

use App\Repository\ScheduleRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;


/**
 * @apiResource(
 *      normalizationContext={"groups"={"schedule:read"}},
 *      denormalizationContext={"groups"={"schedule:write"}}
 * )
 *
 * @ORM\Entity(repositoryClass=ScheduleRepository::class)
 */
class Schedule
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @Groups({"schedule:read", "schedule:write"})
     * @ORM\Column(type="date")
     */
    private $day;

    /**
     * @Groups({"schedule:read", "schedule:write"})
     * @ORM\Column(type="string", length=255)
     */
    private $opening;

    /**
     * @Groups({"schedule:read", "schedule:write"})
     * @ORM\Column(type="string", length=255)
     */
    private $closing;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDay(): ?\DateTimeInterface
    {
        return $this->day;
    }

    public function setDay(\DateTimeInterface $day): self
    {
        $this->day = $day;

        return $this;
    }

    public function getOpening(): ?string
    {
        return $this->opening;
    }

    public function setOpening(string $opening): self
    {
        $this->opening = $opening;

        return $this;
    }

    public function getClosing(): ?string
    {
        return $this->closing;
    }

    public function setClosing(string $closing): self
    {
        $this->closing = $closing;

        return $this;
    }
}
